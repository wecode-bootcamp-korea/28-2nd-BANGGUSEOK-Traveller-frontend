import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';

import {
  atomQueryString,
  atomQueryedData,
  atomPaginateData,
} from '../../atom/filters';

import { useRecoilState } from 'recoil';

import { FilterContext } from './FilterListContainer';

import useCreatePaginate from './hook/useCreatePaginate';

import PaginationButtons from '../../components/Buttons/PaginationButtons';
import TripCard from '../../components/TripCard/TripCard';
import { FilterTripSkeletonCard } from './FilterTripSkeletonCard';

import styled from 'styled-components';

export default function TripCards() {
  const { getEachQuery } = useContext(FilterContext);
  const [queryString] = useRecoilState(atomQueryString);
  const [queryedData] = useRecoilState(atomQueryedData);
  const [paginateData] = useRecoilState(atomPaginateData);

  useCreatePaginate();

  const location = useLocation();
  const pageNumber = location.search.split('page=')[1];
  const locationPath = location.pathname;

  return (
    <TripCardsWrapper>
      {queryedData ? (
        queryedData.length ? (
          <>
            <TripCardsGrid>
              {queryedData.map(item => (
                <TripCardLink to={`${item.product_id}`} key={item.product_id}>
                  <TripCard listItem={item} locationPath={locationPath} />
                </TripCardLink>
              ))}
            </TripCardsGrid>
            <PaginationButtons
              pageNumber={pageNumber ? Number(pageNumber) : 1}
              paginateData={paginateData}
              queryString={queryString}
              getEachQuery={getEachQuery}
            />
          </>
        ) : (
          <TripCardsNotFound>검색 결과가 없습니다.</TripCardsNotFound>
        )
      ) : (
        <TripCardsGrid>
          <FilterTripSkeletonCard />
        </TripCardsGrid>
      )}
    </TripCardsWrapper>
  );
}

const TripCardsWrapper = styled.div`
  opacity: 1;
  z-index: 1;
  padding: 50px 0;
`;

const TripCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 23%));
  column-gap: 2%;
  row-gap: 100px;
`;

const TripCardsNotFound = styled.div`
  display: flex;
  height: calc(100vh - 437px);
  justify-content: center;
  align-items: center;
`;

const TripCardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
