import React from 'react';

import BackgroundView from './Background.view';

interface Props { }

const Background: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <BackgroundView>{props.children}</BackgroundView>
  );
};

Background.displayName = 'Background';
Background.defaultProps = {};

export default Background;