import { useEffect, useCallback } from 'react';

import {
  atomIsContentVisible,
  atomIsSelectedCategory,
  atomCategories,
} from '../../../atom/filters';
import { useRecoilState } from 'recoil';

export default function useFilterToggle() {
  const [, setIsContentVisible] = useRecoilState(atomIsContentVisible);
  const [isSelectedCategory, setIsSelectedCategory] = useRecoilState(
    atomIsSelectedCategory
  );
  const [categories, setCategories] = useRecoilState(atomCategories);

  const handleContentVisible = useCallback(() => {
    setIsContentVisible(true);
  }, [setIsContentVisible]);

  const handleContentHide = useCallback(() => {
    setIsSelectedCategory('');
    setCategories([]);
    setIsContentVisible(false);
  }, [setCategories, setIsContentVisible, setIsSelectedCategory]);

  const handleCategory = e => {
    const name = e.target.getAttribute('name');

    setCategories(current => {
      const newList = [...current];
      newList.includes(name)
        ? newList.splice(newList.indexOf(name, 1))
        : newList.push(name);
      return newList;
    });

    setIsSelectedCategory(isSelectedCategory !== name ? name : '');
  };

  useEffect(() => {
    categories.length !== 0 ? handleContentVisible() : handleContentHide();
  }, [categories.length, handleContentHide, handleContentVisible]);

  return {
    handleContentVisible,
    handleContentHide,
    handleCategory,
  };
}
