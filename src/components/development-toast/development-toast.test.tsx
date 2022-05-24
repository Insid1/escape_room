import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'components/app/common';
import DevelopmentToastPage from './development-toast';

it('error page should render correctly', () => {
  const history = createMemoryHistory();
  render(
    <ThemeProvider theme={appTheme}>
      <Router history={history}>
        <DevelopmentToastPage />
      </Router>
    </ThemeProvider>,
  );
  const generalInfoElement = screen.getByText('Страница находится в разработке');
  const RedirectElement = screen.getByText('Перейти на главную');
  expect(generalInfoElement).toBeInTheDocument();
  expect(RedirectElement).toBeInTheDocument();
});
