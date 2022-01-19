import {
  PaginationWrapper,
  PaginationContainer,
  PaginationBtn,
  PaginationABtn,
  PaginationNextBtn,
} from './PaginationButtonsStyle';

export default function PaginationButtons({
  pageNumber,
  paginateData,
  getEachQuery,
}) {
  const isMoreThanFivePaginate = pageNumber >= 5 && paginateData.length > 5;

  const mappingPaginationData = paginateData.filter((item, index) => {
    const isMiddle = index + 2 >= pageNumber && index + 2 <= pageNumber + 2;
    const isFinalIndex = index + 3 >= pageNumber;

    return pageNumber < 5
      ? index < 5
      : pageNumber < paginateData.length
      ? index === 0 || index === 1 || isMiddle
      : index === 0 || index === 1 || isFinalIndex;
  });
  return (
    <PaginationWrapper>
      <PaginationContainer>
        {mappingPaginationData.map((item, index) => {
          const isActive = pageNumber === item.id;

          return isMoreThanFivePaginate ? (
            index === 1 ? (
              <PaginationBtn key={item.id}>...</PaginationBtn>
            ) : (
              <PaginationABtn
                key={item.id}
                name={item.id}
                isActive={isActive}
                onClick={e => getEachQuery(e, 'page')}
              >
                {item.id}
              </PaginationABtn>
            )
          ) : (
            <PaginationABtn
              key={item.id}
              name={item.id}
              isActive={isActive}
              onClick={e => getEachQuery(e, 'page')}
            >
              {item.id}
            </PaginationABtn>
          );
        })}
      </PaginationContainer>
      <PaginationContainer>
        {pageNumber !== paginateData.length ? (
          <PaginationNextBtn
            name={pageNumber + 1}
            onClick={e => getEachQuery(e, 'page')}
          >
            SHOW ME MORE
          </PaginationNextBtn>
        ) : (
          ''
        )}
      </PaginationContainer>
    </PaginationWrapper>
  );
}
