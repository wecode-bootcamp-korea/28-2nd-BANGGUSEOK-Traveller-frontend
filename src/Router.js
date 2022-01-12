import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import TripList from './pages/TripList/TripList';
import TripDetail from './pages/TripDetail/TripDetail';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import KakaoLogin from './pages/Kakao/KakaoLogin';
import KakaoRequest from './components/Kakao/KakaoRequest';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/TripList" element={<TripList />} />
        <Route path="/TripDetail" element={<TripDetail />} />
        <Route path="/KakaoLogin" element={<KakaoLogin />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRequest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
