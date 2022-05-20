import { useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useParams } from 'react-router-dom';
import { fetchQuest } from 'store/quest/thunks';
import { selectQuest } from 'store/quest/selectors';
import DetailedQuestContainer from './detailed-quest-container';

function DetailedQuest() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const quest = useAppSelector(selectQuest);

  useEffect(() => {
    dispatch(fetchQuest(id as string));
  }, [dispatch, id]);

  return (
    <MainLayout>
      {quest
        ? <DetailedQuestContainer />
        // Сделать нормальный лоадер
        : <p>Loading!!!</p>}
    </MainLayout>
  );
}

export default DetailedQuest;
