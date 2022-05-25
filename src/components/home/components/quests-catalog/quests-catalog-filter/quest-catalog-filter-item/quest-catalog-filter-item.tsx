import { QuestType } from 'consts/enums';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { setQuestTypeFilter } from 'store/interface/slice';
import { selectQuestTypeFilter } from 'store/interface/selectors';
import { mapToFilterProperty } from 'maps/map-to-filter-property';
import * as S from '../../quests-catalog.styled';

type QuestCatalogFilterItemProps = {
  title: QuestType,
};

function QuestCatalogFilterItem({ title }: QuestCatalogFilterItemProps) {
  const dispatch = useAppDispatch();
  const IconComponent = mapToFilterProperty[title].icon;
  const currentQuestTypeFilter = useAppSelector(selectQuestTypeFilter);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(setQuestTypeFilter(title));
  };
  return (
    <S.TabItem>
      <S.TabBtn
        onClick={handleClick}
        isActive={title === currentQuestTypeFilter}
      >
        <IconComponent />
        <S.TabTitle>{mapToFilterProperty[title].title}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
}

export default QuestCatalogFilterItem;
