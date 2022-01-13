import { useContext } from 'react';

import { FilterContext } from './FilterListContainer';

import styled from 'styled-components';

const CATEGORY_ENG_URL = {
  대륙: 'conti',
  지역: 'area',
  테마: 'theme',
  인원: 'person',
};

export default function FilterTagsArea() {
  const {
    isContentVisible,
    handleContentHide,
    selectedCategoryData,
    getEachQuery,
    queryString,
  } = useContext(FilterContext);

  return (
    <FilterTagsWrapper
      onMouseLeave={handleContentHide}
      isContentVisible={isContentVisible}
    >
      <FilterTagsContainer>
        <FilterTags>
          {selectedCategoryData?.map(categoryName => {
            const tagNames = categoryName.tags;
            return tagNames.map(item => {
              return (
                <FilterTagBtn
                  key={item.name}
                  name={item.name}
                  onClick={e =>
                    getEachQuery(
                      e,
                      CATEGORY_ENG_URL[categoryName.tag_category_name]
                    )
                  }
                  isSelectedTag={decodeURI(queryString).includes(
                    item.name.replace('/', '%2F')
                  )}
                >
                  {item.name}
                </FilterTagBtn>
              );
            });
          })}
        </FilterTags>
      </FilterTagsContainer>
    </FilterTagsWrapper>
  );
}

const FilterTagsWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-height: calc(100vh-140px);
  background-color: #fcfcfc;
  padding: 30px 0 37px 30px;
  opacity: ${props => (props.isContentVisible ? 1 : 0)};
  visibility: ${props => (props.isContentVisible ? 'visibility' : 'hidden')};
  transition: all 0.5s;
`;

const FilterTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
`;

const FilterTags = styled.section`
  display: flex;
`;

const FilterTagBtn = styled.button`
  width: 85px;
  height: 50px;
  background-color: ${props => {
    return props.isSelectedTag ? '#1d1d1d' : 'transparent';
  }};
  color: ${props => {
    return props.isSelectedTag ? 'white' : 'black';
  }};
  font-weight: ${props => {
    return props.isSelectedTag ? 700 : 400;
  }};
  border: 0.5px solid lightgrey;
  border-radius: 50px 50px;
  margin-right: 10px;
`;
