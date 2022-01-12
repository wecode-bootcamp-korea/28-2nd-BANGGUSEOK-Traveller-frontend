import styled from 'styled-components';

export default function KakaoLogin() {
  return (
    <KakaoWrapper>
      <KakaoLoginContainer>
        <KakaoIntroduce>Welcome to 방구석 Traveller!</KakaoIntroduce>
        <KakaoLoginBtn href={process.env.REACT_APP_KAKAO_LOGIN_URL}>
          <KakaoImg />
        </KakaoLoginBtn>
      </KakaoLoginContainer>
    </KakaoWrapper>
  );
}

const KakaoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const KakaoLoginContainer = styled.div`
  position: relative;
  text-align: center;
  bottom: 10%;
  border: 5px solid #999;
  border-radius: 60%;
  padding: 100px;
`;

const KakaoIntroduce = styled.div`
  height: 50px;
`;

const KakaoLoginBtn = styled.a`
  display: block;
`;

const KakaoImg = styled.img`
  content: url('images/kakao_loginBtn.png');
`;
