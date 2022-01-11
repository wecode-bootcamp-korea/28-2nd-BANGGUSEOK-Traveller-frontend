import React from 'react';
import { ListDisplayDiv } from './ListDisplayStyles';
import SingleList from './SingleList/SingleList';

export default function ListDisplay({ tripLists }) {
  return (
    <ListDisplayDiv>
      {tripLists &&
        tripLists.map(
          (list, index) =>
            index > 0 && (
              <SingleList
                key={index}
                listName={list.section}
                listItems={list.product}
              />
            )
        )}
    </ListDisplayDiv>
  );
}
