import React from 'react';
import { Link } from 'react-router-dom';
import TripCard from '../../../../components/TripCard/TripCard';
import {
  SingleListDiv,
  SingleListName,
  SingleListUl,
  // LoadMoreButton,
} from './SingleListStyles';

// const limit = 8;

const listNameObj = {
  RANDOM: '/nominees',
  NEW: '/winners',
  ALL: '/nominees',
};

export default function SingleList({ listName, listItems }) {
  // const [clickedNumber, setClickedNumber] = useState(1);
  // const navigate = useNavigate();

  // const updateOffset = () => {
  //   const offset = clickedNumber * 8;
  //   const queryString = `?limit=${limit}&offset=${offset}`;
  //   navigate(queryString);
  //   setClickedNumber(prev => prev + 1);
  // };

  return (
    <SingleListDiv>
      <SingleListName>
        {listName === 'RANDOM' ? 'RECOMMEND' : listName}
      </SingleListName>
      <SingleListUl>
        {listItems &&
          listItems.map((listItem, index) => {
            return (
              <li key={index}>
                <Link to={`${listNameObj[listName]}/${listItem.product_id}`}>
                  <TripCard
                    listItem={listItem}
                    locationPath={listNameObj[listName]}
                  />
                </Link>
              </li>
            );
          })}
      </SingleListUl>
    </SingleListDiv>
  );
}
