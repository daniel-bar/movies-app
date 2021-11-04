import React from 'react';

import AppView from './App.view';

interface Props { }

const App: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <AppView></AppView>
  );
};

App.displayName = 'App';
App.defaultProps = {};

export default React.memo(App);