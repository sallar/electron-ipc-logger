import { useCallback, useMemo } from 'react';
import { Props } from '.';
import { IpcLogData } from '../../shared';
import { SortableField } from '../types';

export function useIpcTable({
  data,
  selectedMsg,
  sortBy,
  sortReverse,
  filter,
  filterInverted,
  relativeTimes,
  onRowClick,
  setSortBy,
}: Omit<Props, 'className'>) {
  const rows = useMemo(() => {
    const ciFilter = filter.toLocaleLowerCase();
    const rows = !filter
      ? [...data]
      : data.filter((row) => {
          const res =
            row.channel.toLocaleLowerCase().includes(ciFilter) ||
            row.args.some((arg) =>
              JSON.stringify(arg).toLocaleLowerCase().includes(filter)
            );
          return filterInverted ? !res : res;
        });

    if (sortBy !== 'n') {
      rows.sort(SORT_BY[sortBy]);
    }

    if (sortReverse) {
      rows.reverse();
    }

    return rows;
  }, [data, filter, filterInverted, sortBy, sortReverse]);

  const sortByN = useCallback(() => setSortBy('n'), [sortBy, sortReverse]);
  const sortByTime = useCallback(() => setSortBy('t'), [sortBy, sortReverse]);
  const sortByMethod = useCallback(
    () => setSortBy('method'),
    [sortBy, sortReverse]
  );
  const sortByChannel = useCallback(
    () => setSortBy('channel'),
    [sortBy, sortReverse]
  );

  return {
    rows,
    selectedMsg,
    relativeTimes,
    sortBy,
    sortReverse,
    onRowClick,
    sortByN,
    sortByTime,
    sortByMethod,
    sortByChannel,
  };
}

const SORT_BY: Record<
  Exclude<SortableField, 'n'>,
  (a: IpcLogData, b: IpcLogData) => number
> = {
  t: function (a: IpcLogData, b: IpcLogData): number {
    const res = a.t - b.t;
    if (res !== 0) return res;
    return a.n - b.n;
  },
  method: function (a: IpcLogData, b: IpcLogData): number {
    const res = a.method.localeCompare(b.method);
    if (res !== 0) return res;
    return a.n - b.n;
  },
  channel: function (a: IpcLogData, b: IpcLogData): number {
    const res = a.channel.localeCompare(b.channel);
    if (res !== 0) return res;
    return a.n - b.n;
  },
};
