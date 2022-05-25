import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { AppRoutes } from 'consts/routes';
import { MockWrapperWithAllProviders } from 'test-utils/wrappers';
import App from './app';

const history = createMemoryHistory();
it('App component should render correctly with provided data from store', () => {
  render(
    <MockWrapperWithAllProviders>
      <App />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Выберите тематику/i))
    .toBeInTheDocument();
  expect(screen.getByText(/квесты в Санкт-Петербурге/i))
    .toBeInTheDocument();
});
it('App component should render DevelopmentToastPage when navigate to /newbie', () => {
  history.push(AppRoutes.Newbie);
  render(
    <MockWrapperWithAllProviders history={history}>
      <App />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Страница находится в разработке/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Перейти на главную/i))
    .toBeInTheDocument();
});
it('App component should render DevelopmentToastPage when navigate to /reviews', () => {
  history.push(AppRoutes.Reviews);
  render(
    <MockWrapperWithAllProviders history={history}>
      <App />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Страница находится в разработке/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Перейти на главную/i))
    .toBeInTheDocument();
});
it('App component should render DevelopmentToastPage when navigate to /promo', () => {
  history.push(AppRoutes.Reviews);
  render(
    <MockWrapperWithAllProviders history={history}>
      <App />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Страница находится в разработке/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Перейти на главную/i))
    .toBeInTheDocument();
});
it('App component should render ContactPage when navigate to /contacts', () => {
  history.push(AppRoutes.Contacts);
  render(
    <MockWrapperWithAllProviders history={history}>
      <App />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Адрес/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Режим работы/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Телефон/i))
    .toBeInTheDocument();
  expect(screen.getByText(/E-mail/i))
    .toBeInTheDocument();
});
it('App component should render ContactPage when navigate to /not-exist-url', () => {
  history.push('/not-exist-url');
  render(
    <MockWrapperWithAllProviders history={history}>
      <App />
    </MockWrapperWithAllProviders>,
  );

  expect(screen.getByText(/Страница не найдена/i))
    .toBeInTheDocument();
  expect(screen.getByText(/Перейти на главную/i))
    .toBeInTheDocument();
});
