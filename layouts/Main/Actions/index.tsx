import React, { FC, memo } from 'react';
import styles from '@/layouts/Main/Main.module.scss';
import { FiDownloadCloud } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';
import { ActionsProps } from '@/types/global';

const WrappedComponent: FC <ActionsProps> = ({ saveColoredCV, saveCV, toggleShowContact }): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export const Actions = memo(WrappedComponent);
export default Actions;
