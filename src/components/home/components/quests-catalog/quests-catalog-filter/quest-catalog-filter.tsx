import * as S from '../quests-catalog.styled';
import QuestCatalogFilterList from './quest-catalog-filter-list';

function QuestCatalogFilter() {
  return (
    <S.Tabs>
      <QuestCatalogFilterList />
    </S.Tabs>
  );
}

export default QuestCatalogFilter;
