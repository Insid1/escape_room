import * as S from '../quests-catalog.styled';
import QuestCatalogFilterList from './quest-catalog-quests-list';

function QuestCatalogQuests() {
  return (
    <S.QuestsList>
      <QuestCatalogFilterList />
    </S.QuestsList>

  );
}

export default QuestCatalogQuests;
