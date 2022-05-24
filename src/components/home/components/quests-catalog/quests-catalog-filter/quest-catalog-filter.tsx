import { DataTestAttribute } from 'consts/data-test-atributes';
import * as S from '../quests-catalog.styled';
import QuestCatalogFilterList from './quest-catalog-filter-list';

function QuestCatalogFilter() {
  return (
    <S.Tabs data-testid={DataTestAttribute.QuestCatalogFilter}>
      <QuestCatalogFilterList />
    </S.Tabs>
  );
}

export default QuestCatalogFilter;
