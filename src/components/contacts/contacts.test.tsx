import { render, screen } from '@testing-library/react';
import { MockWrapperWithRouter, MockWrapperWithTheme } from 'test-utils/wrappers';
import Contacts from './contacts';

it('contacts page should render correctly', () => {
  render(
    <MockWrapperWithTheme>
      <MockWrapperWithRouter>
        <Contacts />
      </MockWrapperWithRouter>
    </MockWrapperWithTheme>,
  );

  expect(screen.getByText(/квесты в санкт-петербурге/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Адрес/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Санкт-Петербург,/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Набережная реки Карповка, д 5/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Режим работы/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Ежедневно, с 9:00 до 20:00/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Телефон/i))
    .toBeInTheDocument();
  expect(screen.getByText(/E-mail/i))
    .toBeInTheDocument();
  expect(screen.getByText(/info@escape-room.ru/i))
    .toBeInTheDocument();
});
