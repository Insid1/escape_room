import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
  ToastLoading,
} from 'components/common/common';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectIsQuestLoaded } from 'store/quest/selectors';
import { selectErrorMessage } from 'store/quests/selectors';
import { fetchQuests } from 'store/quests/thunks';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

function HomePage() {
  const dispatch = useAppDispatch();

  const isQuestsLoaded = useAppSelector(selectIsQuestLoaded);
  const errorMessage = useAppSelector(selectErrorMessage);

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
        <ToastLoading
          isLoaded={isQuestsLoaded}
          errorMessage={errorMessage}
          height={400}
        >
          <QuestsCatalog />
        </ToastLoading>
      </S.Main>
    </MainLayout>
  );
}

export default HomePage;
