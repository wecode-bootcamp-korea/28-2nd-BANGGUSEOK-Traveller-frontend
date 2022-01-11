import RadiusButton from '../Buttons/RadiusButton';
import {
  TripCardDiv,
  TripCardGellery,
  TripCardGelleryImg,
  TripCardDescription,
  TripCardGellerySocial,
  TripCardGelleryShare,
  TripCardDescriptionTitle,
  TripCardDescriptionLocation,
  TripCardDescriptionDate,
  TripCardDescriptionAuthor,
  TripCardDescriptionAuthorUserId,
} from './TripCardStyles';

const cardMockData = {
  img_url:
    'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5',
  is_vote: true,
  title: '여행지 추천드립니다~',
  location: '슈투트가르트',
  date: '2022.01.11',
  user_id: '유저아이디',
};

export default function TripCard() {
  return (
    <TripCardDiv>
      <TripCardGellery>
        <TripCardGelleryImg src={cardMockData.img_url} alt="갤러리" />
        <TripCardGellerySocial>
          <RadiusButton buttonType="faceBookIcon" />
          <RadiusButton buttonType="twitterIcon" />
          <RadiusButton buttonType="painterestIcon" />
          <RadiusButton buttonType="linkedinIcon" />
        </TripCardGellerySocial>
        <RadiusButton buttonType="Collect" />
        {cardMockData.is_vote ? <RadiusButton buttonType="VOTE NOW" /> : null}
        <TripCardGelleryShare>
          <RadiusButton buttonType="siteIcon" />
        </TripCardGelleryShare>
      </TripCardGellery>
      <TripCardDescription>
        <TripCardDescriptionTitle>
          {cardMockData.title}
        </TripCardDescriptionTitle>
        <TripCardDescriptionLocation>
          {cardMockData.location}
          <TripCardDescriptionDate>{cardMockData.date}</TripCardDescriptionDate>
        </TripCardDescriptionLocation>
        <TripCardDescriptionAuthor>
          BY
          <TripCardDescriptionAuthorUserId>
            {cardMockData.user_id}
          </TripCardDescriptionAuthorUserId>
        </TripCardDescriptionAuthor>
      </TripCardDescription>
    </TripCardDiv>
  );
}
