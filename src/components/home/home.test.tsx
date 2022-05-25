import { render, screen } from '@testing-library/react';
import { FAKE_EMPTY_STORE, FAKE_STORE_WITH_ERRORS } from 'test-utils/mock-store.data';
import { DataTestAttribute } from 'test-utils/data-test-atributes';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import HomePage from './home';

it('HomePage component should renders loader correctly without provided data', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_EMPTY_STORE}>
      <HomePage />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByTestId(DataTestAttribute.Loader))
    .toBeInTheDocument();
});
it('HomePage component should renders error alert correctly if error given from state', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_STORE_WITH_ERRORS}>
      <HomePage />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByTestId(DataTestAttribute.AlertError))
    .toBeInTheDocument();
});

it('HomePage component should renders correctly with container component if given data from state', () => {
  render(
    <MockWrapperWithAllProviders>
      <HomePage />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/квесты в Санкт-Петербурге/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Выберите тематику/i))
    .toBeInTheDocument();
  expect(screen.getByTestId(DataTestAttribute.QuestCatalogFilter))
    .toBeInTheDocument();
  expect(screen.getByTestId(DataTestAttribute.QuestCatalogQuests))
    .toBeInTheDocument();
});
