import { useState, useEffect } from 'react';
import { PaletteColors } from '@/types/global';

const useCssColor = (variant: PaletteColors): string => {
  const [cssColor, setCssColor] = useState('#FFFFFF');

  useEffect(() => {
    setCssColor(getComputedStyle(document.documentElement).getPropertyValue(`--${variant}`));
  }, [variant]);

  return cssColor;
};

export default useCssColor;
