import { useState, useEffect } from 'react';
import { WindowSize } from '@/types/global';

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 1920,
    height: 1080,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  
  return windowSize;
};

export default useWindowSize;
