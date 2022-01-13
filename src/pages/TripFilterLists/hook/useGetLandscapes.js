import { useState, useEffect } from 'react';

export default function useGetLandscapes(isSelectedCategory, queryString) {
  const [queryedData, setQueryedData] = useState();
  const [filterBarData, setFilterBarData] = useState();
  const [selectedCategoryData, setSelectedCategoryData] = useState();

  useEffect(() => {
    fetch(`http://e4c2-211-106-114-186.ngrok.io/products/categories`)
      .then(res => res.json())
      .then(data => setFilterBarData(data.result));
  }, []);

  useEffect(() => {
    fetch(`http://e4c2-211-106-114-186.ngrok.io/products?${queryString}`)
      .then(res => res.json())
      .then(data => {
        setQueryedData(data.result);
      });
  }, [queryString]);

  useEffect(() => {
    filterBarData &&
      setSelectedCategoryData(current => {
        return filterBarData.filter(item => {
          return item.tag_category_name === isSelectedCategory;
        });
      });
  }, [isSelectedCategory, filterBarData]);

  return { queryedData, filterBarData, selectedCategoryData };
}
