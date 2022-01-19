import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { atomQueryString, atomIsContentVisible } from '../../atom/filters';
import { useRecoilState } from 'recoil';

import useFilterToggle from './hook/useFilterToggle';
import useEditQuery from './hook/useEditQuery';
import useGetLandscapes from './hook/useGetLandscapes';

import FilterBar from './FilterBar';
import FilterTagsArea from './FilterTagsArea';
import FilterTripCards from './FilterTripCards';

import styled from 'styled-components';

export const FilterContext = React.createContext();

export default function FilterListContainer() {
  const { handleContentVisible, handleContentHide, handleCategory } =
    useFilterToggle();

  const [queryString] = useRecoilState(atomQueryString);
  const [isContentVisible] = useRecoilState(atomIsContentVisible);

  const { getEachQuery, resetQuery } = useEditQuery();
  useGetLandscapes();

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?${queryString}`);
  }, [navigate, queryString]);

  return (
    <FilterContext.Provider
      value={{
        handleContentVisible,
        handleContentHide,
        handleCategory,
        getEachQuery,
        resetQuery,
      }}
    >
      <FilterBarWrapper>
        <FilterBar />
        <FilterTagsArea />
      </FilterBarWrapper>
      <FilteredCardsWrapper isContentVisible={isContentVisible}>
        <FilteredCardsContainer>
          <FilterTripCards />
        </FilteredCardsContainer>
      </FilteredCardsWrapper>
    </FilterContext.Provider>
  );
}
const FilteredCardsWrapper = styled.div`
  background-color: #f4f7f6;
  transition: opacity 0.5s;
  opacity: ${props => (props.isContentVisible ? 0.5 : 1)};
  transition: transform 0.5s ease;
`;

const FilteredCardsContainer = styled.div`
  max-width: 85%;
  width: 100%;
  margin: 0 auto;
`;

const FilterBarWrapper = styled.div`
  position: sticky;
  top: 70px;
  background-color: #fff;
  border: 1px solid #e6eaea;
  z-index: 500;
  transition: transform 0.5s ease;
`;
