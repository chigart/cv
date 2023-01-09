import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const useMobileVersion = (setDarkMode: (darkMode: boolean) => void): boolean => {
  const [isMobileVersion, setIsMobileVersion] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setDarkMode(false);
      setIsMobileVersion(true);
    }
  }, [isMobile]);

  return isMobileVersion;
};

export default useMobileVersion;
