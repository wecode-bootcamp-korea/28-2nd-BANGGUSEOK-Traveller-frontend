import { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { FilterContext } from './FilterListContainer';

import styled from 'styled-components';

import PaginationButtons from '../../components/Buttons/PaginationButtons';
import TripCard from '../../components/TripCard/TripCard';

import { FilterTripSkeletonCard } from './FilterTripSkeletonCard';
import useCreatePaginate from './hook/useCreatePaginate';

export default function TripCards() {
  const { queryString, getEachQuery, queryedData } = useContext(FilterContext);
  const { paginateData } = useCreatePaginate(queryedData);
  const location = useLocation();

  const nowLocation = location.search.split('page=')[1];

  return (
    <TripCardsWrapper>
      {queryedData ? (
        queryedData.length ? (
          <>
            <TripCardsGrid>
              {queryedData.map(item => (
                <Link
                  to={`../tripdetail/${item.product_id}`}
                  key={item.product_id}
                >
                  <TripCard listItem={item} />
                </Link>
              ))}
            </TripCardsGrid>
            <PaginationButtons
              nowLocation={nowLocation ? Number(nowLocation) : 1}
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
