import React, { CSSProperties } from 'react';

import icons from '../../../assets/icons';

import MSvgView from './MSvg.view';

interface Props {
  readonly name: keyof typeof icons;
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly onClick?: () => void;
}

const MSvg: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <MSvgView
      style={props.style}
      className={props.className}
      name={props.name}
      onClick={props.onClick}
    >{props.children}</MSvgView>
  );
};

MSvg.displayName = 'MSvg';
MSvg.defaultProps = {};

export default React.memo(MSvg);
