import { createElement, forwardRef, MouseEventHandler, ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  tag?: 'button' | 'div' | 'span' | 'label';
  onClick: MouseEventHandler;
  children: ReactNode;
  isDisabled?: boolean;
  className?: string;
};

export const Clickable = forwardRef(
  (
    { tag = 'button', isDisabled, className, children, onClick }: Props,
    ref,
  ) => {
    return createElement(
      tag,
      {
        disabled: isDisabled,
        className: classnames(className),
        onClick: onClick,
        ref,
      },
      children,
    );
  },
);
