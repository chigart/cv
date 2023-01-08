import React, { FC, memo } from 'react';
import clsx from 'clsx';
import styles from '@/layouts/Main/Layout.module.scss';
import { FiDownloadCloud } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';
import { ActionsProps } from '@/types/global';

const WrappedComponent: FC <ActionsProps> = ({ saveColoredCV, saveCV, toggleShowContact }): JSX.Element => {
  return (
    <aside className={clsx(styles.toolbar, styles.toolbar__bottom)}>
      <FiDownloadCloud
        className={styles.toolbar__icon}
        onClick={saveColoredCV}
        title='Colored CV'
      />
      <BsDownload
        className={styles.toolbar__icon}
        onClick={saveCV}
        title='CV pdf'
      />
      <AiOutlineClear
        className={styles.toolbar__icon}
        onClick={() => window.location.reload()}
        title='Clear'
      />
      <GrContact
        className={styles.toolbar__icon}
        onClick={toggleShowContact}
        title='Contact'
      />
    </aside>
  );
};

export const Actions = memo(WrappedComponent);
export default Actions;
