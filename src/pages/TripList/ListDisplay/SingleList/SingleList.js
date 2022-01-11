import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TripCard from '../../../../components/TripCard/TripCard';
import {
  SingleListDiv,
  SingleListName,
  SingleListUl,
  LoadMoreButton,
} from './SingleListStyles';

export default function SingleList({ listName, listItems }) {
  const [clickedNumber, setClickedNumber] = useState(2);
  const navigate = useNavigate();

  const updateLimit = () => {
    const limit = 8;
    const offset = clickedNumber * 8;
    const queryString = `?limit=${limit}&offset=${offset}`;
    navigate(queryString);
    setClickedNumber(prev => prev + 1);
  };

  return (
    <SingleListDiv>
      <SingleListName>{listName}</SingleListName>
      <SingleListUl>
        {listItems &&
          listItems.map((listItem, index) => {
            return (
              <li key={index}>
                <Link to={`/TripDetail/${listItem.product_id}`}>
                  <TripCard listItem={listItem} />
                </Link>
              </li>
            );
          })}
      </SingleListUl>
      {listItems.length > 4 && (
        <LoadMoreButton onClick={updateLimit}>Load More</LoadMoreButton>
      )}
    </SingleListDiv>
  );
}
