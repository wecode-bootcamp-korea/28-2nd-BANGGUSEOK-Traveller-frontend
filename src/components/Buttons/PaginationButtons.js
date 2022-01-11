import { cn, cond } from '../../customlib/classNameToggle';

import {
  PaginationWrapper,
  PaginationContainer,
  PaginationBtn,
  PaginationABtn,
} from './PaginationButtonsStyle';

export default function PaginationButtons({ nowLocation, paginateData }) {
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
                href={`?page=${item.id}`}
                className={cn('item', cond(isActive, 'active'))}
              >
                {item.id}
              </PaginationABtn>
            )
          ) : (
            <PaginationABtn
              key={item.id}
              href={`?page=${item.id}`}
              className={cn('item', cond(isActive, 'active'))}
            >
              {item.id}
            </PaginationABtn>
          );
        })}
      </PaginationContainer>
      <PaginationContainer>
        {nowLocation !== paginateData.length ? (
          <PaginationABtn className="more" href={`?page=${nowLocation + 1}`}>
            SHOW ME MORE
          </PaginationABtn>
        ) : (
          ''
        )}
      </PaginationContainer>
    </PaginationWrapper>
  );
}
