import React from 'react';

import SubmitView from './Submit.view';

interface Props {
  readonly placeholder: string;
  readonly className?: string;
}

const PBSubmit: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <SubmitView
      placeholder={props.placeholder}
      className={props.className}
    >{props.children}</SubmitView>
  );
};

PBSubmit.displayName = 'PBSubmit';
PBSubmit.defaultProps = {};

export default PBSubmit;
