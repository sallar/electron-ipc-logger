import { clsx } from 'clsx';
import { FC } from 'react';
import { IpcLogData } from '../../shared';

import styles from './traffic-arrow.module.scss';

export type Props = {
  msg: IpcLogData;
};

export const TrafficArrow: FC<Props> = ({ msg }) => {
  const fromMain = ['send'].includes(msg.method);

  const classes = clsx(
    styles.root,
    fromMain ? styles.fromMain : styles.fromRenderer
  );
  const title = `Data sent by ${fromMain ? 'the main process' : 'a renderer window'}.`;
  const arrow = fromMain ? '↓' : '↑';

  return (
    <span className={classes} title={title}>
      {arrow}
    </span>
  );
};
