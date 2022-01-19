import { useEffect } from 'react';

import { atomAllDataLength, atomPaginateData } from '../../../atom/filters';
import { useRecoilState } from 'recoil';

export default function useCreatePaginate() {
  const [, setPaginateData] = useRecoilState(atomPaginateData);
  const [allDataLength] = useRecoilState(atomAllDataLength);

  useEffect(() => {
    if (allDataLength) {
      const paginateNumber = allDataLength / 8;
      const paginateNumberObj = [];
      let start = 0;

      while (start < paginateNumber) {
        paginateNumberObj.push({
          id: ++start,
        });
      }

      setPaginateData(paginateNumberObj);
    }
  }, [allDataLength, setPaginateData]);
}
