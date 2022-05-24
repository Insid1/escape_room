import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'components/app/common';
import NotFoundPage from './not-found';

it('error notFoundPage should renders correctly', () => {
  const history = createMemoryHistory();
  render(
    <ThemeProvider theme={appTheme}>
      <Router history={history}>
        <NotFoundPage />
      </Router>
    </ThemeProvider>,
  );
  const generalInfoElement = screen.getByText('Страница не найдена');
  const RedirectElement = screen.getByText('Перейти на главную');
  expect(generalInfoElement).toBeInTheDocument();
  expect(RedirectElement).toBeInTheDocument();
});
