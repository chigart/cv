import clsx from 'clsx';
import styles from '@/layouts/Main/Layout.module.scss';
import ExternalLink from '@/layouts/Main/ExternalLink';
import { FC, memo } from 'react';
import { ContactProps } from '@/types/global';

const WrappedComponent: FC <ContactProps> = ({ showContact }): JSX.Element => {
  return (
    <aside className={clsx(styles.toolbar, styles.toolbar__middle, !showContact && styles.toolbar__middle_hidden)}>
      <ExternalLink href='mailto:antonmalkovdev@gmail.com' text='antonmalkovdev@gmail.com' />
      <br />
      <ExternalLink href='https://www.linkedin.com/in/antmalk/' text='Linkedin' />
      <ExternalLink href='https://www.codewars.com/users/chigart' text='Codewars' />
      <ExternalLink href='https://github.com/chigart' text='Github' />
      <ExternalLink href='https://www.facebook.com/antonmalkovphoto' text='Facebook' />
      <ExternalLink href='https://www.instagram.com/antonmalkovphoto' text='Instagram' />
      <ExternalLink href='https://telegram.me/antonmalkov' text='Telegram' />
    </aside>
  );
};

export const Contact = memo(WrappedComponent);
export default Contact;
