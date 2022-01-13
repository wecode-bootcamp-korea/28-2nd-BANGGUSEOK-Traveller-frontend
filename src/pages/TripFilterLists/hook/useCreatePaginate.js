import { useState, useEffect } from 'react';

export default function useCreatePaginate(data) {
  const [paginateData, setPaginateData] = useState([]);

  useEffect(() => {
    if (data) {
      const paginateNumber = data.length / 8;
      const paginateNumberObj = [];
      let start = 0;

      while (start < paginateNumber) {
        paginateNumberObj.push({
          id: ++start,
        });
      }

      setPaginateData(paginateNumberObj);
    }
  }, [data, setPaginateData]);

  return { paginateData };
}
