import { IpcLogData } from '../shared';

export type SortableField = Extract<
  keyof IpcLogData,
  't' | 'n' | 'method' | 'channel'
>;

export type PanelPosition = 'right' | 'bottom';
