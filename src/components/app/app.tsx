import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { AppRoutes } from 'consts/routes';
import ErrorPage from 'components/error/error';
import DevelopmentToast from 'components/development-toast/development-toast';
import { appTheme } from './common';
import * as S from './app.styled';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Routes>
          <Route path={AppRoutes.Main} element={<Home />} />
          <Route path={`${AppRoutes.Quest}:id`} element={<DetailedQuest />} />
          <Route path={AppRoutes.Contacts} element={<Contacts />} />

          <Route path={AppRoutes.Newbie} element={<DevelopmentToast />} />
          <Route path={AppRoutes.Reviews} element={<DevelopmentToast />} />
          <Route path={AppRoutes.Promo} element={<DevelopmentToast />} />

          <Route path={AppRoutes.Error} element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
