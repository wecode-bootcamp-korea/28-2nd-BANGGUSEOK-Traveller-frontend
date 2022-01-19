import { useEffect } from 'react';

import {
  atomQueryString,
  atomIsSelectedCategory,
  atomQueryedData,
  atomAllDataLength,
  atomFilterBarData,
  atomSelectedCategoryData,
} from '../../../components/atom/filterAtom';
import { useRecoilState } from 'recoil';

export default function useGetLandscapes() {
  const [isSelectedCategory] = useRecoilState(atomIsSelectedCategory);
  const [, setQueryedData] = useRecoilState(atomQueryedData);
  const [, setAllDataLength] = useRecoilState(atomAllDataLength);
  const [filterBarData, setFilterBarData] = useRecoilState(atomFilterBarData);
  const [, setSelectedCategoryData] = useRecoilState(atomSelectedCategoryData);

  const [queryString] = useRecoilState(atomQueryString);

  useEffect(() => {
    fetch(`http://9539-211-106-114-186.ngrok.io/products/categories`)
      .then(res => res.json())
      .then(data => setFilterBarData(data.result));
  }, [setFilterBarData]);

  useEffect(() => {
    fetch(`http://9539-211-106-114-186.ngrok.io/products?${queryString}`)
      .then(res => res.json())
      .then(data => {
        setAllDataLength(data.quantity);
        setQueryedData(data.result);
      });
  }, [queryString, setAllDataLength, setQueryedData]);

  useEffect(() => {
    filterBarData &&
      setSelectedCategoryData(current => {
        return filterBarData.filter(item => {
          return item.tag_category_name === isSelectedCategory;
        });
      });
  }, [isSelectedCategory, filterBarData, setSelectedCategoryData]);
}
