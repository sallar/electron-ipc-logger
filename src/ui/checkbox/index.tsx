import { Checkbox as CB, Field, Label } from '@headlessui/react';
import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';

import styles from './checkbox.module.scss';

export type Props = {
  title?: string;
  checked?: boolean;
  children?: ReactNode;
  className?: string;
  onChange?: (checked: boolean) => void;
};

export const Checkbox: FC<Props> = ({
  title,
  checked,
  children,
  className,
  onChange,
}) => {
  return (
    <Field className={clsx(styles.root, className)} title={title}>
      <CB
        as="div"
        checked={checked}
        onChange={onChange}
        className={clsx(styles.checkbox, checked && styles.checked)}
      >
        {({ hover }) => (
          <>
            <div className={clsx(styles.circle, hover && styles.hover)} />
            <div className={styles.box}>
              <svg className={styles.svg} viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 6L5 8.5L9 3"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </>
        )}
      </CB>
      <Label className={styles.label}>{children}</Label>
    </Field>
  );
};
