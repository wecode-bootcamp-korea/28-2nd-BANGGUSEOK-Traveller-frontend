import { useState } from 'react';

export default function useNavToggles() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return { isSearchOpen, handleSearchOpen, isModalOpen, toggleModal };
}
