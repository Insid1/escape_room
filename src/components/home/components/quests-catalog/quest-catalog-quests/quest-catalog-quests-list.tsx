import { useAppSelector } from 'store/hooks';
import { selectFilteredQuests } from 'store/quests/selectors';
import QuestCatalogQuestsItem from './quest-catalog-quests-item';

function QuestCatalogQuestsList() {
  const quests = useAppSelector(selectFilteredQuests);
  return (
    <>
      {quests.map((quest) => (
        <QuestCatalogQuestsItem key={quest.id} {...quest} />
      ))}
    </>
  );
}

export default QuestCatalogQuestsList;
