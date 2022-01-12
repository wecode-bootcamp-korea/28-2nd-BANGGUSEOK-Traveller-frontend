import styled from 'styled-components';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundImage src="images/404.jpg" alt="Not_Found" />
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NotFoundImage = styled.img``;
