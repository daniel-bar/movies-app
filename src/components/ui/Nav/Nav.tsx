import React, { useState } from 'react';

import NavView from './Nav.view';

interface Props {
  readonly placeholder: string;
  readonly value: string;
  readonly changeHandler: (value: string) => void;
  readonly type?: 'email' | 'text';
  readonly className?: string;
}

const Nav: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const [ raisePlaceholderState, setRaisePlaceholderState ] = useState<boolean>(false);

  const raisePlaceholderHandler = (raised: boolean) => setRaisePlaceholderState(() => raised); 

  return (
    <NavView
      placeholder={props.placeholder}
      value={props.value}
      changeHandler={props.changeHandler}
      raisePlaceholder={raisePlaceholderState}
      raisePlaceholderHandler={raisePlaceholderHandler}
      type={props.type}
      className={props.className}
    >{props.children}</NavView>
  );
};

Nav.displayName = 'Nav';
Nav.defaultProps = {};

export default Nav;