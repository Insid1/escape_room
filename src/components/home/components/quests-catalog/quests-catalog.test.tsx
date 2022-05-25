import { render, screen } from '@testing-library/react';
import { DataTestAttribute } from 'test-utils/data-test-atributes';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import QuestsCatalog from './quests-catalog';

it('QuestsCatalog component should renders correctly with container component if given data from state', () => {
  render(
    <MockWrapperWithAllProviders>
      <QuestsCatalog />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByTestId(DataTestAttribute.QuestCatalogFilter))
    .toBeInTheDocument();
  expect(screen.getByTestId(DataTestAttribute.QuestCatalogQuests))
    .toBeInTheDocument();
});
