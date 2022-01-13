import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useEditQuery() {
  const [queryString, setQueryString] = useState('');

  const [searchParams] = useSearchParams();

  const getEachQuery = (e, categoryName) => {
    const name = e.target.getAttribute('name');

    searchParams.get(categoryName) !== name
      ? searchParams.set(categoryName, name)
      : searchParams.delete(categoryName);

    setQueryString(searchParams.toString());
  };

  const resetQuery = () => {
    setQueryString('');
  };

  return { queryString, getEachQuery, resetQuery };
}
