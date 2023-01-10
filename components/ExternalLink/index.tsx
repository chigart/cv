import styles from './ExternalLink.module.scss';
import { ExternalLinkProps } from '@/types/global';
import { FC, memo } from 'react';

const WrappedComponent: FC <ExternalLinkProps> = ({ href, text }): JSX.Element => {
  return (
    <a
      href={href}
      className={styles.link}
      rel='noopener noreferrer'
      target='_blank'
    >
      <p>
        { text }
      </p>
    </a>
  );
};

export const ExternalLink = memo(WrappedComponent);
export default ExternalLink;
