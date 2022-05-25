/* eslint-disable import/no-extraneous-dependencies */
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { appTheme as defaultAppTheme } from 'components/app/common';
import { FAKE_STORE_WITH_DATA } from './mock-store.data';

const mockHistory = createMemoryHistory();
const mockStore = configureMockStore([thunk]);

interface MockWrapperWithStoreProps extends React.PropsWithChildren<{}> {
  storeData?: any
}
interface MockWrapperWithRouterProps extends React.PropsWithChildren<{}> {
  history?: MemoryHistory
}
interface MockWrapperWithThemeProps extends React.PropsWithChildren<{}> {
  appTheme?: DefaultTheme
}

function MockWrapperWithStore({
  children,
  storeData = FAKE_STORE_WITH_DATA,
}: MockWrapperWithStoreProps) {
  return (
    <Provider store={mockStore(storeData)}>
      {children}
    </Provider>
  );
}

function MockWrapperWithTheme({ children, appTheme = defaultAppTheme }: MockWrapperWithThemeProps) {
  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  );
}
function MockWrapperWithRouter({ children, history = mockHistory }: MockWrapperWithRouterProps) {
  return (
    <Router history={history}>
      {children}
    </Router>
  );
}

function MockWrapperWithAllProviders({
  children, appTheme, history, storeData,
}:
MockWrapperWithStoreProps & MockWrapperWithRouterProps & MockWrapperWithThemeProps) {
  return (
    <MockWrapperWithTheme appTheme={appTheme}>
      <MockWrapperWithStore storeData={storeData}>
        <MockWrapperWithRouter history={history}>
          {children}
        </MockWrapperWithRouter>
      </MockWrapperWithStore>
    </MockWrapperWithTheme>

  );
}

export {
  MockWrapperWithStore,
  MockWrapperWithTheme,
  MockWrapperWithRouter,
  MockWrapperWithAllProviders,
};
