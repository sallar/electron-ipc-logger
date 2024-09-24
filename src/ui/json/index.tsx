import { FC } from 'react';
import {
  GetItemString,
  JSONTree,
  LabelRenderer,
  ValueRenderer,
} from 'react-json-tree';
import { theme } from './theme';

import styles from './json.module.scss';

export type Props = {
  name?: string;
  data: any;
};

export const Json: FC<Props> = ({ data, name }) => {
  return (
    <div className={styles.root}>
      <JSONTree
        shouldExpandNodeInitially={(keyPath) => keyPath.length < 3}
        getItemString={getItemString}
        labelRenderer={getLabelRenderer(name)}
        data={data}
        theme={theme}
      />
    </div>
  );
};

const getItemString: GetItemString = (
  nodeType,
  data,
  itemType,
  itemString,
  keyPath
) => {
  return <span className={styles.itemString}>{itemString}</span>;
};

function getLabelRenderer(name: string): LabelRenderer {
  return (keyPath, nodeType, expanded, expandable) => {
    if (keyPath.length === 1) {
      return <span className={styles.label}>{name}:</span>;
    }
    return <span className={styles.label}>{keyPath[0]}:</span>;
  };
}
