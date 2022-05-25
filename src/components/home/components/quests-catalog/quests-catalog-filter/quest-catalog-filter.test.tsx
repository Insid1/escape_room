import { render, screen } from '@testing-library/react';
import { FAKE_EMPTY_STORE } from 'test-utils/mock-store.data';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import QuestCatalogFilter from './quest-catalog-filter';

it('QuestCatalogFilter component should render correctly', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_EMPTY_STORE}>
      <QuestCatalogFilter />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/все квесты/i))
    .toBeInTheDocument();
  expect(screen.getByText(/ужасы/i))
    .toBeInTheDocument();
  expect(screen.getByText(/мистика/i))
    .toBeInTheDocument();
  expect(screen.getByText(/детектив/i))
    .toBeInTheDocument();
  expect(screen.getByText(/приключения/i))
    .toBeInTheDocument();
  expect(screen.getByText(/sci-fi/i))
    .toBeInTheDocument();
});
