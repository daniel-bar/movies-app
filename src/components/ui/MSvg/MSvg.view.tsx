import React, { CSSProperties } from 'react';

import icons from '../../../assets/icons';

import classes from './MSvg.module.scss';

interface Props {
  readonly name: keyof typeof icons;
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly onClick?: () => void;
}

const MSvgView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const svgClasses: string = classes['container'] + (props.className ? ` ${props.className}` : '');

  return (
    <svg
      style={props.style}
      className={svgClasses}
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={'0 0 ' + icons[props.name][0]}
      dangerouslySetInnerHTML={{ __html: icons[props.name][1] }}
      onClick={props.onClick}
    ></svg>
  );
};

MSvgView.displayName = 'MSvgView';
MSvgView.defaultProps = {};

export default MSvgView;
