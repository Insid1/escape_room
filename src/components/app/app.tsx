import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { AppRoutes } from 'consts/routes';
import NotFoundPage from 'components/not-found/not-found';
import DevelopmentToastPage from 'components/development-toast/development-toast';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from 'history/history';
import { appTheme } from './common';
import 'leaflet/dist/leaflet.css';
import * as S from './app.styled';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <HistoryRouter history={history}>
        <Routes>
          <Route path={AppRoutes.Main} element={<Home />} />
          <Route path={`${AppRoutes.Quest}:id`} element={<DetailedQuest />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />

          <Route path={AppRoutes.Newbie} element={<DevelopmentToastPage />} />
          <Route path={AppRoutes.Reviews} element={<DevelopmentToastPage />} />
          <Route path={AppRoutes.Promo} element={<DevelopmentToastPage />} />

          <Route path={AppRoutes.Error} element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </ThemeProvider>
  );
}

export default App;
