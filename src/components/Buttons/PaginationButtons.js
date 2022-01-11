import {
  PaginationWrapper,
  PaginationContainer,
  PaginationBtn,
  PaginationABtn,
  PaginationNextBtn,
} from './PaginationButtonsStyle';

export default function PaginationButtons({
  nowLocation,
  paginateData,
  getEachQuery,
}) {
  const isMoreThanFivePaginate = nowLocation >= 5 && paginateData.length > 5;

  const mappingPaginationData = paginateData.filter((item, index) => {
    const isMiddle = index + 2 >= nowLocation && index + 2 <= nowLocation + 2;
    const isFinalIndex = index + 3 >= nowLocation;

    return nowLocation < 5
      ? index < 5
      : nowLocation < paginateData.length
      ? index === 0 || index === 1 || isMiddle
      : index === 0 || index === 1 || isFinalIndex;
  });

  return (
    <PaginationWrapper>
      <PaginationContainer>
        {mappingPaginationData.map((item, index) => {
          const isActive = nowLocation === item.id;

          return isMoreThanFivePaginate ? (
            index === 1 ? (
              <PaginationBtn key={item.id}>...</PaginationBtn>
            ) : (
              <PaginationABtn
                key={item.id}
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
        {nowLocation !== paginateData.length ? (
          <PaginationNextBtn
            name={nowLocation + 1}
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
