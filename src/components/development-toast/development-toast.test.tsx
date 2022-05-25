import { render, screen } from '@testing-library/react';
import { MockWrapperWithRouter, MockWrapperWithTheme } from 'test-utils/wrappers';
import DevelopmentToastPage from './development-toast';

it('error page should render correctly', () => {
  render(
    <MockWrapperWithTheme>
      <MockWrapperWithRouter>
        <DevelopmentToastPage />
      </MockWrapperWithRouter>
    </MockWrapperWithTheme>,
  );
  const generalInfoElement = screen.getByText('Страница находится в разработке');
  const RedirectElement = screen.getByText('Перейти на главную');
  expect(generalInfoElement).toBeInTheDocument();
  expect(RedirectElement).toBeInTheDocument();
});
