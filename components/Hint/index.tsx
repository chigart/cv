import { FC, memo } from 'react';
import { HintProps } from '@/types/global';
import styles from './Hint.module.scss';
import clsx from 'clsx';
import { BsArrowUpRight } from 'react-icons/bs';

const WrappedComponent: FC <HintProps> = ({ color }) => {
  return (
    <>
      { color === 'white' &&
        <p className={clsx(styles.hint)}>
          Scroll to change the size of the light
        </p>
      }

      { color === 'blue' &&
        <>
          <p className={clsx(styles.hint)}>
            You can turn on the light any moment
          </p>

          <span className={clsx(styles.hint, styles.hint__icon)}>
            <BsArrowUpRight />
          </span>
        </>
      }

    </>
  );
};

export const Hint = memo(WrappedComponent);
export default Hint;
