import { render, screen } from '@testing-library/react';
import { FAKE_EMPTY_STORE, FAKE_STORE_WITH_ERRORS } from 'test-utils/mock-store.data';
import { DataTestAttribute } from 'test-utils/data-test-atributes';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import DetailedQuest from './detailed-quest';

it('DetailedQuest component should renders loader correctly without provided data', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_EMPTY_STORE}>
      <DetailedQuest />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByTestId(DataTestAttribute.Loader))
    .toBeInTheDocument();
});
it('DetailedQuest component should renders error alert correctly if error given from state', () => {
  render(
    <MockWrapperWithAllProviders storeData={FAKE_STORE_WITH_ERRORS}>
      <DetailedQuest />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByTestId(DataTestAttribute.AlertError))
    .toBeInTheDocument();
});

it('DetailedQuest component should renders correctly with container component if given data from state', () => {
  render(
    <MockWrapperWithAllProviders>
      <DetailedQuest />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByTestId(DataTestAttribute.DetailedQuestMain))
    .toBeInTheDocument();
});
