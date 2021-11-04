import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Background from './components/ui/Background/Background';
import Nav from './components/ui/Nav/Nav';

const Register = React.lazy(() => import('./components/pages/Register/Register'));
const Login = React.lazy(() => import('./components/pages/Login/Login'));
const About = React.lazy(() => import('./components/pages/About/About'));

interface Props { }

const AppView: React.FC<Props> = (props: React.PropsWithChildren<Props>) => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Nav />
      <Background>
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Background>
    </Suspense>
  </BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
