import ExternalLink from '@/components/ExternalLink';
import { memo } from 'react';

const WrappedComponent = (): JSX.Element => {
  return (
    <>
      <ExternalLink href='mailto:antonmalkovdev@gmail.com' text='antonmalkovdev@gmail.com' />
      <br />
      <ExternalLink href='https://github.com/chigart' text='Github' />
      <ExternalLink href='https://www.linkedin.com/in/antmalk/' text='Linkedin' />
      <ExternalLink href='https://www.codewars.com/users/chigart' text='Codewars' />
      <ExternalLink href='https://www.instagram.com/antonmalkovphoto' text='Instagram' />
      <ExternalLink href='https://www.facebook.com/antonmalkovphoto' text='Facebook' />
      <ExternalLink href='https://telegram.me/antonmalkov' text='Telegram' />
    </>
  );
};

export const Contact = memo(WrappedComponent);
export default Contact;
