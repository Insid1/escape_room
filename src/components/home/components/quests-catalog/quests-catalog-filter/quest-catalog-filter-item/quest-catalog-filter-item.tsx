import { QuestType } from 'enums/enums';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setQuestTypeFilter } from 'store/interface/slice';
import { selectQuestTypeFilter } from 'store/interface/selectors';
import * as S from '../../quests-catalog.styled';
import { MapToItemProperty } from './map-to-item-property';

type QuestCatalogFilterItemProps = {
  title: QuestType,
};

function QuestCatalogFilterItem({ title }: QuestCatalogFilterItemProps) {
  const dispatch = useAppDispatch();
  const IconComponent = MapToItemProperty[title].icon;
  const currentQuestTypeFilter = useAppSelector(selectQuestTypeFilter);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    dispatch(setQuestTypeFilter(title));
  };
  return (
    <S.TabItem>
      <S.TabBtn
        onClick={handleClick}
        isActive={title === currentQuestTypeFilter}
      >
        <IconComponent />
        <S.TabTitle>{MapToItemProperty[title].title}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
}

export default QuestCatalogFilterItem;
