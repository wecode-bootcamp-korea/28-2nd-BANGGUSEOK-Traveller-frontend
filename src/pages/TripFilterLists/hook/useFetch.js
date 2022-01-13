import { useEffect, useState } from 'react';

export default function useFetch(url, fetcher) {
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      fetcher(url).then(data => {
        setData(data);
      });
    } catch (err) {
      setError(err);
    }
  }, []);

  return { data, error };
}
