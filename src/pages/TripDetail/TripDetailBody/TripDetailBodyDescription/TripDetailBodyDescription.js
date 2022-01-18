import React from 'react';
import RadiusButton from '../../../../components/Buttons/RadiusButton';
import {
  TripDetailBodyDescriptionDiv,
  TripDetailBodyDescriptionInfo,
  TripDetailBodyDescriptionTags,
} from './TripDetailBodyStyles';

export default function TripDetailBodyDescription() {
  return (
    <>
      <TripDetailBodyDescriptionDiv>'VOTE NOW'</TripDetailBodyDescriptionDiv>
      <TripDetailBodyDescriptionInfo>
        La Forge du Malt is a micro brewery located in Trois-Rivières, Québec
        Canada. Discover their various brews forged with passion.
      </TripDetailBodyDescriptionInfo>
      <TripDetailBodyDescriptionTags>
        <RadiusButton buttonType="wecode" />
        <RadiusButton buttonType="fighting" />
      </TripDetailBodyDescriptionTags>
    </>
  );
}
