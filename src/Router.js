import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import WithNav from './components/NavOutlet/WithNav';
import WithoutNav from './components/NavOutlet/WithoutNav';
import Main from './pages/Main/Main';
import NotFound from './components/NotFound/NotFound';
import KakaoRequest from './components/Kakao/KakaoRequest';
import FilterListsRouteNesting from './pages/TripFilterLists/FilterListsRouteNesting';
import ScrollToTop from './customlib/ScrollToTop';

export const AuthContext = React.createContext();

const FILTER_ROUTE_PATHS = ['/winners/*', '/nominees/*'];

export default function Router() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<Main />} />
            {FILTER_ROUTE_PATHS.map(item => (
              <Route
                path={`${item}`}
                element={<FilterListsRouteNesting />}
                key={item}
              />
            ))}
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
