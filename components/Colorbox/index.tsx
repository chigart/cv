import styles from './Colorbox.module.scss';
import { ColorboxProps } from '@/types/global';
import { FC, memo } from 'react';
import { defaultLightColor } from '@/lib/constants';
import { BsEraser } from 'react-icons/bs';
import clsx from 'clsx';
import useCssColor from '@/hooks/useCssColor';

const WrappedComponent: FC<ColorboxProps> = ({ variant, setColor, color, darkMode }): JSX.Element => {
  const cssColor = useCssColor(variant);

  return (
    <div
      style={{ background: color === variant ? defaultLightColor : cssColor }}
      className={clsx(styles.colorbox, darkMode && styles.colorbox_darkMode)}
      onClick={() => setColor(color === variant ? defaultLightColor : variant)}
    >
      { !darkMode && variant === color && <BsEraser /> }
    </div>
  );
};

export const Colorbox = memo(WrappedComponent);
export default Colorbox;
