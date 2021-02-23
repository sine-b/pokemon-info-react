import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import configureStore, { IAppState } from './store/store';

import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

import './index.css';

interface IProps {
  store: Store<IAppState>;
}

const store = configureStore();
const Root: React.FunctionComponent<IProps> = (props) => {
  return (
    <Provider store={props.store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Provider>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
