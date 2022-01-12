import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { Kakao } from './OAuth';

Kakao.init(process.env.REACT_APP_JS_APIKEY);

export default function KakaoRequest() {
  const navigate = useNavigate();
  const location = useLocation();
  const requestCode = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).code;

  const getAccessToken = async () => {
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
          Kakao.Auth.setAccessToken(data.access_token);
          fetch('http://85ba-211-106-114-186.ngrok.io/users/login/kakao/1', {
            headers: { Authorization: data.access_token },
          })
            .then(res => res.json())
            .then(data => localStorage.setItem('bangguseokToken', data.token));
        });
    } catch (err) {
      alert('접근 코드 발행에 오류가 있습니다.');
      navigate(-1);
    }
  };

  useEffect(() => {
    getAccessToken();
  });

  return null;
}
