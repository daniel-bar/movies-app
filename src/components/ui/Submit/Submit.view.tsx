import React from 'react';

import classes from './PBSubmit.module.scss';

interface Props {
  readonly placeholder: string;
  readonly className?: string;
}

const PBSubmitView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const buttonClasses = `${classes['button']}${props.className ? ` ${props.className}` : ''}`;

  return (
    <button
      className={buttonClasses}
      type="submit"
    >{props.placeholder}</button>
  );
};

PBSubmitView.displayName = 'PBSubmitView';
PBSubmitView.defaultProps = {};

export default PBSubmitView;
