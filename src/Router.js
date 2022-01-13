import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WithNav from './components/NavOutlet/WithNav';
import WithoutNav from './components/NavOutlet/WithoutNav';
import Main from './pages/Main/Main';
import TripDetail from './pages/TripDetail/TripDetail';
import FilterListContainer from './pages/TripFilterLists/FilterListContainer';
import NotFound from './components/NotFound/NotFound';
import KakaoRequest from './components/Kakao/KakaoRequest';

export const AuthContext = React.createContext();

export default function Router() {
  const [userToken, setUserToken] = useState('');

  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      <BrowserRouter>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<Main />} />
            <Route path="/filter" element={<FilterListContainer />} />
            <Route path="/tripdetail" element={<TripDetail />} />
          </Route>

          <Route element={<WithoutNav />}>
            <Route path="/oauth/callback/kakao" element={<KakaoRequest />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
