import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import RadiusButton from '../../../components/Buttons/RadiusButton';
import {
  TripDetailHeaderDiv,
  TripDetailHeaderName,
  TripDetailHeaderVoters,
  TripDetailHeaderVotersImg,
  TripDetailHeaderVotersHeart,
} from './TripDetailHeaderStyles';

export default function TripDetailHeader() {
  return (
    <TripDetailHeaderDiv>
      <TripDetailHeaderName>
        Nominees / <strong>Studio Debuut</strong>
      </TripDetailHeaderName>
      <TripDetailHeaderVoters>
        <TripDetailHeaderVotersImg src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
        <TripDetailHeaderVotersImg src="https://images.unsplash.com/photo-1642308994461-fc420a61a614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" />
        <TripDetailHeaderVotersImg src="https://images.unsplash.com/photo-1642425149717-c9b583cfa08c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" />
        <TripDetailHeaderVotersImg src="https://images.unsplash.com/photo-1642243873611-44134c4e11fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" />
        <TripDetailHeaderVotersHeart>
          <FontAwesomeIcon icon={faHeart} />
          16
        </TripDetailHeaderVotersHeart>
        <RadiusButton buttonType="Collect" />
      </TripDetailHeaderVoters>
    </TripDetailHeaderDiv>
  );
}
