import { render, screen } from '@testing-library/react';
import { DataTestAttribute } from 'test-utils/data-test-atributes';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import DetailedQuestContainer from './detailed-quest-container';

it('DetailedQuest component should renders loader correctly without provided data', () => {
  render(
    <MockWrapperWithAllProviders>
      <DetailedQuestContainer />
    </MockWrapperWithAllProviders>,

  );

  expect(screen.getByTestId(DataTestAttribute.DetailedQuestContent))
    .toBeInTheDocument();
});
