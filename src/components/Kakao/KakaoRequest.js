import { atomUserToken } from '../atom/commonAtom';
import { useSetRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import qs from 'qs';

import { Kakao } from './OAuth';

const USER_TYPE = {
  mentor: 1,
  mentee: 2,
};

Kakao.init(process.env.REACT_APP_JS_APIKEY);

export default function KakaoRequest() {
  const navigate = useNavigate();
  const location = useLocation();
  const setUserToken = useSetRecoilState(atomUserToken);

  const requestCode = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).code;

  const errorRoute = () => {
    alert('로그인에 실패하였습니다.');
    navigate('/');
  };

  const successRoute = () => {
    navigate('/');
  };

  const goAuthOurService = async (data, userType) => {
    Kakao.Auth.setAccessToken(data.access_token);
    try {
      await fetch(
        `http://9539-211-106-114-186.ngrok.io/users/login/kakao/${userType}`,
        {
          headers: { Authorization: data.access_token },
        }
      )
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('bangguseokToken', data.token);
          setUserToken(data.token);
        })
        .then(() => successRoute());
    } catch (error) {
      errorRoute();
    }
  };

  const getAccessToken = async (e, userType) => {
    const postToken = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_LOGIN_URI,
      code: requestCode,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    });

    try {
      await fetch(process.env.REACT_APP_KAKAO_TOKEN_URL, {
        method: 'post',
        body: postToken,
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
        .then(res => res.json())
        .then(data => {
          data.error ? errorRoute() : goAuthOurService(data, userType);
        });
    } catch (err) {
      alert('접근 코드 발행에 오류가 있습니다.');
      navigate(-1);
    }
  };

  return (
    <UserTypeSelectWrapper>
      <UserTypeSelectContainer>
        <UserTypeSelectHead>
          당신은 멘토이신가요, 멘티이신가요?
        </UserTypeSelectHead>
        <UserTypeSelectButtons>
          <UserTypeSelectButton
            onClick={e => getAccessToken(e, USER_TYPE.mentor)}
          >
            멘토
          </UserTypeSelectButton>
          <UserTypeSelectButton
            onClick={e => getAccessToken(e, USER_TYPE.mentee)}
          >
            멘티
          </UserTypeSelectButton>
        </UserTypeSelectButtons>
      </UserTypeSelectContainer>
    </UserTypeSelectWrapper>
  );
}

const UserTypeSelectWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
`;

const UserTypeSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 15%;
`;

const UserTypeSelectHead = styled.header`
  text-align: center;
  margin-bottom: 5%;
`;

const UserTypeSelectButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin: 0 auto;
`;

const UserTypeSelectButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
