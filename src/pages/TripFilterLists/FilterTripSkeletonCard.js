import styled from 'styled-components';

const defaultSkeletonCards = [1, 2, 3, 4];

export function FilterTripSkeletonCard() {
  return (
    <>
      {defaultSkeletonCards.map(item => {
        return (
          <TripCardSkeletonWrapper key={item}>
            <TripCardImageSkeleton />
            <TripCardSkeletonWhiteWrapper>
              <TripCardSkeletonTitle />
              <TripCardSkeletonLocation />
              <TripCardSkeletonDate />
            </TripCardSkeletonWhiteWrapper>
            <TripCardSkeletonAuthorWrapper>
              <TripCardSkeletonAuthorContainer>
                <TripCardSkeletonAuthor />
              </TripCardSkeletonAuthorContainer>
            </TripCardSkeletonAuthorWrapper>
          </TripCardSkeletonWrapper>
        );
      })}
    </>
  );
}

const TripCardSkeletonAnimation = styled.div`
  background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(lightgrey 100%, transparent 0);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;

  animation: TripCardSkeletonAnimate 1s infinite;

  @keyframes TripCardSkeletonAnimate {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
`;

const TripCardSkeletonWrapper = styled.div`
  background: rgba(255, 255, 255, 0);
`;

const TripCardImageSkeleton = styled(
  TripCardSkeletonAnimation.withComponent('div')
)`
  width: 100%;
  height: 292px;
`;

const TripCardSkeletonWhiteWrapper = styled.section`
  position: relative;
  width: 90%;
  padding: 20px 5%;
  background-color: #fff;
`;

const TripCardSkeletonTitle = styled(
  TripCardSkeletonAnimation.withComponent('div')
)`
  width: 30%;
  height: 20px;
`;

const TripCardSkeletonLocation = styled(
  TripCardSkeletonAnimation.withComponent('div')
)`
  display: inline-block;
  width: 20%;
  height: 20px;
  margin-top: 10px;
`;

const TripCardSkeletonDate = styled(
  TripCardSkeletonAnimation.withComponent('div')
)`
  display: inline-block;
  margin-left: 55%;
  width: 25%;
  height: 20px;
`;

const TripCardSkeletonAuthorWrapper = styled(
  TripCardSkeletonWhiteWrapper.withComponent('div')
)`
  padding: 10px 5%;
`;

const TripCardSkeletonAuthorContainer = styled.div`
  width: 100%;
  border-top: 1px solid #f5f7f6;
`;

const TripCardSkeletonAuthor = styled(
  TripCardSkeletonAnimation.withComponent('div')
)`
  width: 25%;
  height: 20px;
  margin-top: 10px;
`;
