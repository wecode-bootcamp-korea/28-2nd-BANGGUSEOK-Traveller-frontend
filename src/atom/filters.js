import { atom } from 'recoil';

export const atomQueryString = atom({
  key: 'queryString',
  default: '',
});

export const atomIsContentVisible = atom({
  key: 'isContentVisible',
  default: false,
});

export const atomIsSelectedCategory = atom({
  key: 'isSelectedCategory',
  default: '',
});

export const atomCategories = atom({
  key: 'categories',
  default: [],
});

export const atomQueryedData = atom({
  key: 'queryedData',
  default: undefined,
});

export const atomAllDataLength = atom({
  key: 'allDataLength',
  default: undefined,
});

export const atomPaginateData = atom({
  key: 'paginateData',
  default: [],
});

export const atomFilterBarData = atom({
  key: 'filterBarData',
  default: undefined,
});

export const atomSelectedCategoryData = atom({
  key: 'selectedCategoryData',
  default: undefined,
});
