import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app/app';
import { Provider } from 'react-redux';
import store from 'store/store';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from 'history/history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
