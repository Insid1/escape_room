import { render, screen } from '@testing-library/react';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import QuestCatalogQuests from './quest-catalog-quests';

it('QuestCatalogQuests component should render correctly', () => {
  render(
    <MockWrapperWithAllProviders>
      <QuestCatalogQuests />
    </MockWrapperWithAllProviders>,

  );

  expect(screen.getByText(/Ритуал/i))
    .toBeInTheDocument();
  expect(screen.getByText(/склеп/i))
    .toBeInTheDocument();
  expect(screen.getByText(/маньяк/i))
    .toBeInTheDocument();
});
