import QuestCatalogFilter from './quests-catalog-filter/quest-catalog-filter';
import QuestCatalogQuests from './quest-catalog-quests/quest-catalog-quests';

function QuestsCatalog() {
  return (
    <>
      <QuestCatalogFilter />
      <QuestCatalogQuests />
    </>
  );
}

export default QuestsCatalog;
