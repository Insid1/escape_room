import { render, screen } from '@testing-library/react';
import { QuestType } from 'consts/enums';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import QuestCatalogFilterItem from './quest-catalog-filter-item';

it('QuestsCatalog component should renders correctly with container component if given data from state', () => {
  render(
    <MockWrapperWithAllProviders>
      <QuestCatalogFilterItem title={QuestType.Horror} />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/ужасы/i))
    .toBeInTheDocument();
});
