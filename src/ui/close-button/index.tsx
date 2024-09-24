import { FC } from 'react';

import styles from './close-button.module.scss';

type Props = {
  onClick: () => void;
  title?: string;
};

export const CloseButton: FC<Props> = ({ title, onClick }) => {
  return (
    <div
      title={title || 'Close'}
      className={styles.closeButton}
      onClick={onClick}
    >
      <svg viewBox="0 0 10 10" fill="none">
        <path d="M1 1L9 9M 1 9L9 1" />
      </svg>
    </div>
  );
};
