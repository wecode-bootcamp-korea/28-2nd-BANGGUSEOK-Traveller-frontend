import { useEffect } from 'react';

export default function useScrollbarToggle(isSideBarOpen) {
  useEffect(() => {
    isSideBarOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [isSideBarOpen]);
  return null;
}
