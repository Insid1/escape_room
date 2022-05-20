import { ThemeProvider } from 'styled-components';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quest" element={<DetailedQuest />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
