import { useEffect } from 'react';
import { MainLayout, ToastLoading } from 'components/common/common';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useParams } from 'react-router-dom';
import { fetchQuest } from 'store/quest/thunks';
import { selectIsQuestLoaded, selectQuestErrorMessage } from 'store/quest/selectors';
import DetailedQuestContainer from './detailed-quest-container';

function DetailedQuest() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector(selectQuestErrorMessage);
  const isQuestLoaded = useAppSelector(selectIsQuestLoaded);

  useEffect(() => {
    dispatch(fetchQuest(id as string));
  }, [dispatch, id]);

  return (
    <MainLayout>
      <ToastLoading
        errorMessage={errorMessage}
        isLoaded={isQuestLoaded}
        height={800}
      >
        <DetailedQuestContainer />
      </ToastLoading>
    </MainLayout>
  );
}

export default DetailedQuest;
