import { QuestType } from 'enums/enums';
import QuestCatalogFilterItem from './quest-catalog-filter-item/quest-catalog-filter-item';

function QuestCatalogFilterList() {
  return (
    <>
      {Object.values(QuestType).map((type) => (
        <QuestCatalogFilterItem
          key={type}
          title={type}
        />
      ))}
    </>
  );
}

export default QuestCatalogFilterList;
