import { useContext } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import {
  atomIsSelectedCategory,
  atomFilterBarData,
} from '../../components/atom/filterAtom';
import { useRecoilState } from 'recoil';

import { FilterContext } from './FilterListContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faHistory } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const CATEGORY_ENG_URL = {
  대륙: 'conti',
  지역: 'area',
  테마: 'theme',
  인원: 'person',
};

export default function FilterBar() {
  const [isSelectedCategory] = useRecoilState(atomIsSelectedCategory);
  const [filterBarData] = useRecoilState(atomFilterBarData);
  const { handleCategory, resetQuery } = useContext(FilterContext);

  const [searchParams] = useSearchParams();

  const location = useLocation();
  const navigate = useNavigate();

  const moveToBase = () => {
    resetQuery();
    navigate(location.pathname);
  };

  return (
    <FilterBarContainer>
      <FilterBarLeft>
        <FilterUl>
          <FilterLi>
            <FontAwesomeIcon icon={faFilter} />
          </FilterLi>
          <FilterLi>Filter by</FilterLi>
          {filterBarData?.map(item => {
            const categoryName = item.tag_category_name;
            const categoryEngName = CATEGORY_ENG_URL[item.tag_category_name];
            return (
              <FilterItemLi
                key={categoryName}
                name={categoryName}
                isSelectedCategory={isSelectedCategory === categoryEngName}
                isSelectedTag={searchParams.get(categoryEngName) !== null}
                onClick={handleCategory}
              >
                {searchParams.get(categoryEngName) !== null
                  ? searchParams.get(categoryEngName)
                  : categoryName}
              </FilterItemLi>
            );
          })}
          {searchParams.toString().length > 1 &&
            searchParams.get('page') !== 1 && (
              <FilterResetLi onClick={moveToBase}>
                <FontAwesomeIcon icon={faHistory} />
                RESET FILTERS
              </FilterResetLi>
            )}
        </FilterUl>
      </FilterBarLeft>
    </FilterBarContainer>
  );
}

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterBarLeft = styled.section`
  flex: 1;
`;
const FilterUl = styled.ul`
  display: flex;
`;

const FilterLi = styled.li`
  position: relative;
  height: 69px;
  padding: 0 20px;
  line-height: 73px;
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
  border-right: 1px solid #e6eaea;
  white-space: nowrap;
  transition: all 0.5s;
`;

const FilterItemLi = styled(FilterLi.withComponent('li'))`
  background-color: ${props =>
    (props.isSelectedCategory || props.isSelectedTag) && '#bbb'};
  font-weight: ${props => props.isSelectedTag && 'bold'};

  &:hover {
    opacity: 0.5;
  }
`;

const FilterResetLi = styled(FilterLi.withComponent('li'))`
  svg {
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    transform: rotate(0deg);
    margin-right: 10px;
  }

  &:hover {
    svg {
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      transform: rotate(-720deg);
    }
  }
`;
