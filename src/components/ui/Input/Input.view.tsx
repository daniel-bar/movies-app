import React from 'react';

import classes from './Input.module.scss';

interface Props {
  readonly placeholder: string;
  readonly value: string;
  readonly changeHandler: (value: string) => void;
  readonly raisePlaceholder: boolean;
  readonly raisePlaceholderHandler: (raised: boolean) => void;
  readonly type?: 'email' | 'text';
  readonly className?: string;
}

const InputView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const containerClasses = `${classes['container']}${props.className ? ` ${props.className}` : ''}`;
  const placeholderClasses = `${classes['container__placeholder']}${props.raisePlaceholder ? ` ${classes['container__placeholder--raised']}` : ''}`;

  return (
    <div className={containerClasses}>
      <span className={placeholderClasses}>{props.placeholder}</span>
      <input
        className={classes['container__input']}
        value={props.value}
        onChange={({ currentTarget: { value }}) => props.changeHandler(value)}
        onFocus={() => props.raisePlaceholderHandler(true)}
        onBlur={() => props.raisePlaceholderHandler(props.value !== '')}
        type={props.type ?? 'text'}
      />
    </div>
  );
};

InputView.displayName = 'InputView';
InputView.defaultProps = {};

export default InputView;
