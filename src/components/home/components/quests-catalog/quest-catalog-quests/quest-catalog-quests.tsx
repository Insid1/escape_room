import { DataTestAttribute } from 'consts/data-test-atributes';
import * as S from '../quests-catalog.styled';
import QuestCatalogFilterList from './quest-catalog-quests-list';

function QuestCatalogQuests() {
  return (
    <S.QuestsList data-testid={DataTestAttribute.QuestCatalogQuests}>
      <QuestCatalogFilterList />
    </S.QuestsList>

  );
}

export default QuestCatalogQuests;
