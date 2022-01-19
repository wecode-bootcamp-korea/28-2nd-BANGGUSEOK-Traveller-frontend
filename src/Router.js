import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import WithNav from './components/NavOutlet/WithNav';
import WithoutNav from './components/NavOutlet/WithoutNav';
import Main from './pages/Main/Main';
import NotFound from './components/NotFound/NotFound';
import KakaoRequest from './components/Kakao/KakaoRequest';
import FilterListsRouteNesting from './pages/TripFilterLists/FilterListsRouteNesting';

export const AuthContext = React.createContext();

export default function Router() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<Main />} />
            <Route path="/winners/*" element={<FilterListsRouteNesting />} />
            <Route path="/nominees/*" element={<FilterListsRouteNesting />} />
          </Route>

          <Route element={<WithoutNav />}>
            <Route path="/oauth/callback/kakao" element={<KakaoRequest />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
