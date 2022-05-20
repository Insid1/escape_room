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
          {/* Добавить WIP страницу для новичкам, отзывы, акции */}

          {/* <Route path={AppRoutes.Newbie} element={TOAST} /> */}
          {/* <Route path={AppRoutes.Reviews} element={TOAST} /> */}
          {/* <Route path={AppRoutes.Promo} element={TOAST} /> */}

          {/* Добавить страницу заглушку для некорректных адресов */}
          <Route path={AppRoutes.Error} element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
