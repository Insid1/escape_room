import { ThemeProvider } from 'styled-components';
import { appTheme } from 'components/app/common';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FAKE_STORE_WITH_DATA } from 'test/mock-store.data';
import thunk from 'redux-thunk';
import { DataTestAttribute } from 'consts/data-test-atributes';
import DetailedQuestContainer from './detailed-quest-container';

it('DetailedQuest component should renders loader correctly without provided data', () => {
  const mockStore = configureMockStore([thunk]);
  render(
    <Provider store={mockStore(FAKE_STORE_WITH_DATA)}>
      <ThemeProvider theme={appTheme}>
        <DetailedQuestContainer />
      </ThemeProvider>
      ,
    </Provider>,
  );

  expect(screen.getByTestId(DataTestAttribute.DetailedQuestContent))
    .toBeInTheDocument();
});
