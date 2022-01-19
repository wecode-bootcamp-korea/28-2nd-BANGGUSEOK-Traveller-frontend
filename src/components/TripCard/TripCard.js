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

const buttonTypeObj = [
  {
    id: 1,
    buttonType: 'faceBookIcon',
  },
  {
    id: 2,
    buttonType: 'twitterIcon',
  },
  {
    id: 3,
    buttonType: 'painterestIcon',
  },
  {
    id: 4,
    buttonType: 'linkedinIcon',
  },
];

export default function TripCard({ listItem }) {
  return (
    <TripCardDiv>
      {listItem.created_at && (
        <>
          <TripCardGellery>
            <TripCardGelleryImg src={listItem.main_image} alt="갤러리" />
            <TripCardGellerySocial>
              {buttonTypeObj.map(singleButton => (
                <RadiusButton
                  key={singleButton.id}
                  buttonType={singleButton.buttonType}
                />
              ))}
            </TripCardGellerySocial>
            <RadiusButton buttonType="Collect" />
            <VoteButton>Vote Now</VoteButton>
            <RadiusButton buttonType="siteIcon" />
          </TripCardGellery>
          <TripCardDescription>
            <TripCardDescriptionTitle>
              {listItem.product_name}
            </TripCardDescriptionTitle>
            <TripCardDescriptionDate>
              {listItem.created_at.substr(0, 10)}
            </TripCardDescriptionDate>
            <TripCardDescriptionAuthor>
              BY
              <TripCardDescriptionAuthorUserId>
                {listItem.user}
              </TripCardDescriptionAuthorUserId>
            </TripCardDescriptionAuthor>
          </TripCardDescription>
        </>
      )}
    </TripCardDiv>
  );
}
