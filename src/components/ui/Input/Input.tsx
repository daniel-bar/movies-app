import React, { useState } from 'react';

import InputView from './Input.view';

interface Props {
  readonly placeholder: string;
  readonly value: string;
  readonly changeHandler: (value: string) => void;
  readonly type?: 'email' | 'text' | 'file';
  readonly style?: string;
  readonly className?: string;
}

const Input: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ raisePlaceholderState, setRaisePlaceholderState ] = useState<boolean>(false);

  const raisePlaceholderHandler = (raised: boolean) => setRaisePlaceholderState(() => raised); 

  return (
    <InputView
      placeholder={props.placeholder}
      value={props.value}
      changeHandler={props.changeHandler}
      raisePlaceholder={raisePlaceholderState}
      raisePlaceholderHandler={raisePlaceholderHandler}
      type={props.type}
      className={props.className}
    >{props.children}</InputView>
  );
};

Input.displayName = 'Input';
Input.defaultProps = {};

export default Input;
