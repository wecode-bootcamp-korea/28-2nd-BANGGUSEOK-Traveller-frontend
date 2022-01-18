import styled from 'styled-components';

export default function KakaoLogin() {
  return (
    <KakaoWrapper>
      <KakaoLoginContainer>
        <KakaoIntroduce>WELCOME TO BANGGUSEOK Traveller</KakaoIntroduce>
        <KakaoLoginBtn href={process.env.REACT_APP_KAKAO_LOGIN_URL}>
          <KakaoImg />
        </KakaoLoginBtn>
      </KakaoLoginContainer>
    </KakaoWrapper>
  );
}

const KakaoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const KakaoLoginContainer = styled.div`
  position: relative;
  text-align: center;
`;

const KakaoIntroduce = styled.div`
  font-weight: 700;
  height: 100px;
`;

const KakaoLoginBtn = styled.a`
  display: block;
`;

const KakaoImg = styled.img`
  content: url('images/kakao_loginBtn.png');
`;
