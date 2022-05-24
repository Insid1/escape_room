import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { IQuest } from 'types/quest-type';
import { mapToComplexityName, mapToTypeName } from 'consts/maps';
import { DataTestAttribute } from 'consts/data-test-atributes';
import * as S from './detailed-quest.styled';

type DetailedQuestInfoProps = IQuest & {
  onBookingBtnClick: React.MouseEventHandler<HTMLButtonElement>;
};

function DetailedQuestContent(props: DetailedQuestInfoProps) {
  const {
    title, duration, type,
    peopleCount, level, description,
    onBookingBtnClick,
  } = props;

  return (
    <S.PageContentWrapper data-testid={DataTestAttribute.DetailedQuestContent}>
      <S.PageHeading>
        <S.PageTitle>{title}</S.PageTitle>
        <S.PageSubtitle>{mapToTypeName[type]}</S.PageSubtitle>
      </S.PageHeading>

      <S.PageDescription>
        <S.Features>
          <S.FeaturesItem>
            <IconClock width="20" height="20" />
            <S.FeatureTitle>
              {duration}
              {' '}
              мин.
            </S.FeatureTitle>
          </S.FeaturesItem>
          <S.FeaturesItem>
            <IconPerson width="19" height="24" />
            <S.FeatureTitle>{`${peopleCount[0]}–${peopleCount[1]} чел.`}</S.FeatureTitle>
          </S.FeaturesItem>
          <S.FeaturesItem>
            <IconPuzzle width="24" height="24" />
            <S.FeatureTitle>{mapToComplexityName[level]}</S.FeatureTitle>
          </S.FeaturesItem>
        </S.Features>

        <S.QuestDescription>
          {description}
        </S.QuestDescription>

        <S.QuestBookingBtn
          onClick={onBookingBtnClick}
        >
          Забронировать
        </S.QuestBookingBtn>
      </S.PageDescription>
    </S.PageContentWrapper>

  );
}

export default DetailedQuestContent;
