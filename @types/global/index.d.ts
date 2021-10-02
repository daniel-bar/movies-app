import { compose } from 'redux';

export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly REACT_APP_API_PATH: string;
    }
  }

  let __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose | undefined;

  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}