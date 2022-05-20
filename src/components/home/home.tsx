import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';
import { fetchQuests } from 'store/quests/thunks';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuests());
  }, [dispatch]);
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
}

export default HomePage;
