import { useEffect } from 'react';

import {
  atomQueryString,
  atomIsSelectedCategory,
  atomQueryedData,
  atomAllDataLength,
  atomFilterBarData,
  atomSelectedCategoryData,
} from '../../../atom/filters';
import { useRecoilState } from 'recoil';

export default function useGetLandscapes() {
  const [isSelectedCategory] = useRecoilState(atomIsSelectedCategory);
  const [, setQueryedData] = useRecoilState(atomQueryedData);
  const [, setAllDataLength] = useRecoilState(atomAllDataLength);
  const [filterBarData, setFilterBarData] = useRecoilState(atomFilterBarData);
  const [, setSelectedCategoryData] = useRecoilState(atomSelectedCategoryData);

  const [queryString] = useRecoilState(atomQueryString);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products/categories`)
      .then(res => res.json())
      .then(data => setFilterBarData(data.result));
  }, [setFilterBarData]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/products/filter?${queryString}`)
      .then(res => res.json())
      .then(data => {
        setAllDataLength(data.result.quantity);
        setQueryedData(data.result.product_data);
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
