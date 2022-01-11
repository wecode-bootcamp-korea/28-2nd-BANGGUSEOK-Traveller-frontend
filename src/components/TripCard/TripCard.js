import RadiusButton from '../Buttons/RadiusButton';
import {
  TripCardDiv,
  TripCardGellery,
  TripCardGelleryImg,
  TripCardDescription,
  TripCardGellerySocial,
  VoteButton,
  TripCardDescriptionTitle,
  TripCardDescriptionDate,
  TripCardDescriptionAuthor,
  TripCardDescriptionAuthorUserId,
} from './TripCardStyles';

export default function TripCard({ listItem }) {
  return (
    <TripCardDiv>
      <TripCardGellery>
        <TripCardGelleryImg src={listItem.main_image} alt="갤러리" />
        <TripCardGellerySocial>
          <RadiusButton buttonType="faceBookIcon" />
          <RadiusButton buttonType="twitterIcon" />
          <RadiusButton buttonType="painterestIcon" />
          <RadiusButton buttonType="linkedinIcon" />
        </TripCardGellerySocial>
        <RadiusButton buttonType="Collect" />
        <VoteButton>Vote Now</VoteButton>
        <RadiusButton buttonType="siteIcon" />
      </TripCardGellery>
      <TripCardDescription>
        <TripCardDescriptionTitle>
          {listItem.product_name}
        </TripCardDescriptionTitle>
        <TripCardDescriptionDate>{listItem.created_at}</TripCardDescriptionDate>
        <TripCardDescriptionAuthor>
          BY
          <TripCardDescriptionAuthorUserId>
            {listItem.user}
          </TripCardDescriptionAuthorUserId>
        </TripCardDescriptionAuthor>
      </TripCardDescription>
    </TripCardDiv>
  );
}
