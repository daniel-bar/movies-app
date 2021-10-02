import React from 'react';

import PBSubmitView from './PBSubmit.view';

interface Props {
  readonly placeholder: string;
  readonly className?: string;
}

const PBSubmit: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <PBSubmitView
      placeholder={props.placeholder}
      className={props.className}
    >{props.children}</PBSubmitView>
  );
};

PBSubmit.displayName = 'PBSubmit';
PBSubmit.defaultProps = {};

export default PBSubmit;
