import { atom } from 'recoil';

export const atomUserToken = atom({
  key: 'userToken',
  default: localStorage.getItem('bangguseokToken'),
});
