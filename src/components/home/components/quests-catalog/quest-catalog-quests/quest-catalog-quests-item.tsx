import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { IQuest } from 'types/quest-type';
import { AppRoutes } from 'consts/routes';
import { PUBLIC_FOLDER } from 'consts/consts';
import { mapToComplexityName } from 'maps/map-to-complexity-name';
import * as S from '../quests-catalog.styled';

function QuestCatalogQuestsItem(props: IQuest) {
  const {
    id, previewImg, title, peopleCount, level,
  } = props;
  return (
    <S.QuestItem>
      <S.QuestItemLink to={AppRoutes.Quest + id}>
        <S.Quest>
          <S.QuestImage
            src={`${PUBLIC_FOLDER}/${previewImg}`}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]} - ${peopleCount[1]} чел.`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {mapToComplexityName[level]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

export default QuestCatalogQuestsItem;
