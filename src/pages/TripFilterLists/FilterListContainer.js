import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFilterToggle from './hook/useFilterToggle';
import useEditQuery from './hook/useEditQuery';

import styled from 'styled-components';

import FilterBar from './FilterBar';
import FilterTagsArea from './FilterTagsArea';
import FilterTripCards from './FilterTripCards';
import useGetLandscapes from './hook/useGetLandscapes';

export const FilterContext = React.createContext();
export default function FilterListContainer() {
  const {
    isContentVisible,
    handleContentVisible,
    handleContentHide,
    isSelectedCategory,
    handleCategory,
  } = useFilterToggle();

  const { queryString, getEachQuery, resetQuery } = useEditQuery();

  const { filterBarData, selectedCategoryData, queryedData } = useGetLandscapes(
    isSelectedCategory,
    queryString
  );

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?${queryString}`);
  }, [navigate, queryString]);

  return (
    <FilterContext.Provider
      value={{
        isContentVisible,
        handleContentVisible,
        handleContentHide,
        handleCategory,
        isSelectedCategory,
        selectedCategoryData,
        queryString,
        getEachQuery,
        filterBarData,
        queryedData,
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
