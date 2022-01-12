import { Kakao } from './OAuth';

export default function kakaoLogout() {
  Kakao.Auth.logout(function () {});
}
