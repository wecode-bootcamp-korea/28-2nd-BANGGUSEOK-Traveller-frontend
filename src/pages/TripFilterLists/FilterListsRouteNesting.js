import { Routes, Route } from 'react-router-dom';

import TripDetail from '../TripDetail/TripDetail';
import FilterListContainer from './FilterListContainer';

export default function FilterListsRouteNesting() {
  return (
    <Routes>
      <Route path="/" element={<FilterListContainer />} />
      <Route path="/:id" element={<TripDetail />} />
    </Routes>
  );
}
