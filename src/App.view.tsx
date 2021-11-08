import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Background from './components/ui/Background/Background';
import Nav from './components/ui/Nav/Nav';

const Register = React.lazy(() => import('./components/pages/Register/Register'));
const Login = React.lazy(() => import('./components/pages/Login/Login'));
const About = React.lazy(() => import('./components/pages/About/About'));
const Welcome = React.lazy(() => import('./components/pages/Welcome/Welcome'));
const AddMovie = React.lazy(() => import('./components/pages/AddMovie/AddMovie'));
const Contact = React.lazy(() => import('./components/pages/Contact/Contact'));

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
          <Route path="/welcome" component={Welcome}/>
          <Route path="/add-movie" component={AddMovie}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Background>
    </Suspense>
  </BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
