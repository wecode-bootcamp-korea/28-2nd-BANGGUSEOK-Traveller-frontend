import { useState, useEffect } from 'react';

export default function useFilterToggle() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isSelectedCategory, setIsSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleContentVisible = () => {
    setIsContentVisible(true);
  };

  const handleContentHide = () => {
    setIsSelectedCategory('');
    setCategories([]);
    setIsContentVisible(false);
  };

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
  }, [categories.length]);

  return {
    isContentVisible,
    handleContentVisible,
    handleContentHide,
    isSelectedCategory,
    handleCategory,
  };
}
