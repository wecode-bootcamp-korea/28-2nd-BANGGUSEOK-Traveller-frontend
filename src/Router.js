import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import TripList from './pages/TripList/TripList';
import TripDetail from './pages/TripDetail/TripDetail';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/TripList" element={<TripList />} />
        <Route path="/TripDetail" element={<TripDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
