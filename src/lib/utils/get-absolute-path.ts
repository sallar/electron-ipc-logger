import { join, resolve } from 'path';

export function getAbsolutePath(...path: string[]): string {
  return resolve(join(__dirname, 'electron-ipc-logger'), ...path);
}
