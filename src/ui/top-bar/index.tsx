import { FC } from 'react';

import styles from './top-bar.module.scss';
import { Checkbox } from '../checkbox';
import { Filter } from '../filter';
import { BarSeparator } from '../bar-separator';

export type Props = {
  relativeTimes: boolean;
  onUseRelativeTimes: (relative?: boolean) => void;
  setFilter: (filter: string) => void;
};

export const TopBar: FC<Props> = ({
  relativeTimes,
  onUseRelativeTimes,
  setFilter,
}) => {
  return (
    <div className={styles.root}>
      <Filter inversable onChange={setFilter} />
      <BarSeparator />
      <Checkbox
        title="Toggle between absolute and relative times display"
        checked={relativeTimes}
        onChange={onUseRelativeTimes}
      >
        Relative times
      </Checkbox>
    </div>
  );
};
