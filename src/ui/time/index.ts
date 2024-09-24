import { FC } from 'react';
import { API_NAMESPACE, IpcLoggerApi } from '../../shared';

export type Props = {
  t: number;
  relative?: boolean;
};

const START_TIME = (window[API_NAMESPACE] as IpcLoggerApi).startTime;

export const Time: FC<Props> = ({ t, relative }) => {
  return relative ? relativeTime(t - START_TIME) : absoluteTime(t);
};

function relativeTime(ellapsedMs: number): string {
  // less than 1 sec
  if (ellapsedMs < 1000) return `+${ellapsedMs} ms`;
  // less than 1 min
  if (ellapsedMs < 60_000) return `+${padSeconds(ellapsedMs / 1000)} s`;
  // less than 1 hour
  if (ellapsedMs < 3_600_000) {
    const secs = (ellapsedMs % 60_000) / 1000;
    const mins = Math.floor(ellapsedMs / 60_000);
    return `+${mins}:${padSeconds(secs, true)} s`;
  }
}

function absoluteTime(timestamp: number): string {
  // if the day hasn't changed, showing only the hour is enough
  const hasDayChanged = new Date(START_TIME).getDate() !== new Date().getDate();

  const date = new Date(timestamp);
  const sec = pad2(date.getSeconds());
  const min = pad2(date.getMinutes());
  const hour = pad2(date.getHours());

  if (!hasDayChanged) {
    const ms = date.getMilliseconds().toString().substring(0, 3).padEnd(3, '0');
    return `${hour}:${min}:${sec}.${ms}`;
  } else {
    const day = pad2(date.getDate());
    const month = pad2(date.getMonth() + 1);
    return `${month}/${day} ${hour}:${min}:${sec}`;
  }
}

function pad2(n: number): string {
  return n.toString().padStart(2, '0');
}

function padSeconds(secs: number, padLeft?: boolean): string {
  const [s, ms] = secs.toFixed(3).split('.');
  return [padLeft ? s.padStart(2, '0') : s, ms.padEnd(3, '0')].join('.');
}
