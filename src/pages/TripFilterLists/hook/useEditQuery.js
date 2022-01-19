import { useSearchParams } from 'react-router-dom';

import { atomQueryString } from '../../../components/atom/filterAtom';
import { useSetRecoilState } from 'recoil';

export default function useEditQuery() {
  const [searchParams] = useSearchParams();

  const setAtomQueryString = useSetRecoilState(atomQueryString);

  const getEachQuery = (e, categoryName) => {
    const name = e.target.getAttribute('name');

    searchParams.get(categoryName) !== name
      ? searchParams.set(categoryName, name)
      : searchParams.delete(categoryName);

    setAtomQueryString(searchParams.toString());
  };

  const resetQuery = () => {
    setAtomQueryString('');
  };

  return { getEachQuery, resetQuery };
}
