import { render, screen } from '@testing-library/react';
import { FAKE_QUEST } from 'test-utils/mock-data';
import { IQuest } from 'types/quest-type';
import { MockWrapperWithRouter, MockWrapperWithTheme } from 'test-utils/wrappers';
import QuestCatalogQuestsItem from './quest-catalog-quests-item';

it('QuestCatalogQuestsItem component should renders correctly with container component if given data from state', () => {
  render(
    <MockWrapperWithRouter>
      <MockWrapperWithTheme>
        <QuestCatalogQuestsItem {...FAKE_QUEST as IQuest} />
      </MockWrapperWithTheme>
    </MockWrapperWithRouter>,
  );

  expect(screen.getByText(/Склеп/i))
    .toBeInTheDocument();
  expect(screen.getByText(/2 - 5 чел./i))
    .toBeInTheDocument();
  expect(screen.getByText(/сложный/i))
    .toBeInTheDocument();
});
