import { render, screen } from '@testing-library/react';
import { FAKE_QUEST } from 'test-utils/mock-data';
import { jest } from '@jest/globals';
import { MockWrapperWithTheme } from 'test-utils/wrappers';
import DetailedQuestContent from './detailed-quest-content';

it('DetailedQuestContent component should render given data', () => {
  const fakeOnBookingButtonClick = jest.fn();
  render(
    <MockWrapperWithTheme>
      <DetailedQuestContent onBookingBtnClick={fakeOnBookingButtonClick} {...FAKE_QUEST} />
    </MockWrapperWithTheme>,

  );

  expect(screen.getByText(/Ужасы/i))
    .toBeInTheDocument();
  expect(screen.getByText(/120 мин./i))
    .toBeInTheDocument();
  expect(screen.getByText(/2–5 чел./i))
    .toBeInTheDocument();
  expect(screen.getByText(/Сложный/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?/i))
    .toBeInTheDocument();
  expect(screen.getByRole('button'))
    .toBeInTheDocument();
});
