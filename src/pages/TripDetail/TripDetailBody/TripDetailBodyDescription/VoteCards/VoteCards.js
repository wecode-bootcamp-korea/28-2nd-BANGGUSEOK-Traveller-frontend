import React from 'react';
import { VoteCardsUl } from './VoteCardsStyles';

const scoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function VoteCard({ updateIndex }) {
  return (
    <VoteCardsUl>
      {scoreArray.map((score, index) => {
        return (
          <li key={index} onClick={() => updateIndex(index + 1)}>
            {score}
          </li>
        );
      })}
    </VoteCardsUl>
  );
}
