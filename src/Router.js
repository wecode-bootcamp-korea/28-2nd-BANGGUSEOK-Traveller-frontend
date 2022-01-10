import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import TripList from './pages/TripList/TripList';
import TripDetail from './pages/TripDetail/TripDetail';
import NotFound from './components/NotFound/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/TripList" element={<TripList />} />
        <Route path="/TripDetail" element={<TripDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
