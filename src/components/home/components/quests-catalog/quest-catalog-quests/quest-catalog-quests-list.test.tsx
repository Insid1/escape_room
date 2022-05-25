import { render, screen } from '@testing-library/react';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import QuestCatalogQuestsList from './quest-catalog-quests-list';

it('QuestCatalogQuestsList component should render correctly', () => {
  render(
    <MockWrapperWithAllProviders>
      <QuestCatalogQuestsList />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Ритуал/i))
    .toBeInTheDocument();
  expect(screen.getByText(/склеп/i))
    .toBeInTheDocument();
  expect(screen.getByText(/маньяк/i))
    .toBeInTheDocument();
});
