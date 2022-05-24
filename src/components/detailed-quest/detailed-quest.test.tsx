import { ThemeProvider } from 'styled-components';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { appTheme } from 'components/app/common';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FAKE_EMPTY_STORE, FAKE_STORE_WITH_DATA, FAKE_STORE_WITH_ERRORS } from 'test/mock-store.data';
import thunk from 'redux-thunk';
import { DataTestAttribute } from 'consts/data-test-atributes';
import DetailedQuest from './detailed-quest';

const history = createMemoryHistory();

it('DetailedQuest component should renders loader correctly without provided data', () => {
  const mockStore = configureMockStore([thunk]);
  render(
    <Provider store={mockStore(FAKE_EMPTY_STORE)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <DetailedQuest />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByTestId(DataTestAttribute.Loader))
    .toBeInTheDocument();
});
it('DetailedQuest component should renders error alert correctly if error given from state', () => {
  const mockStore = configureMockStore([thunk]);
  render(
    <Provider store={mockStore(FAKE_STORE_WITH_ERRORS)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <DetailedQuest />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByTestId(DataTestAttribute.AlertError))
    .toBeInTheDocument();
});

it('DetailedQuest component should renders correctly with container component if given data from state', () => {
  const mockStore = configureMockStore([thunk]);
  render(
    <Provider store={mockStore(FAKE_STORE_WITH_DATA)}>
      <ThemeProvider theme={appTheme}>
        <Router history={history}>
          <DetailedQuest />
        </Router>
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByTestId(DataTestAttribute.DetailedQuestMain))
    .toBeInTheDocument();
});
