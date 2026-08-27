import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollHandler = () => {
  const { pathname, hash } = useLocation();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (lastPathname.current !== pathname) {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }
    
    lastPathname.current = pathname;
  }, [pathname, hash]);

  return null;
};

