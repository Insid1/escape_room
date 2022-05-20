import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { PUBLIC_FOLDER } from 'consts/consts';
import { IQuest } from 'types/quest-type';
import { MapToComplexityName } from 'consts/maps';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';

type DetailedQuestInfoProps = IQuest & {
  isBookingModalOpened: boolean;
  onBookingBtnClick: React.MouseEventHandler<HTMLButtonElement>;
  onModalCloseBtnClick: React.MouseEventHandler<HTMLButtonElement>;
};

function DetailedQuestInfo(props: DetailedQuestInfoProps) {
  const {
    title, coverImg, duration,
    peopleCount, level, description,
    onBookingBtnClick, isBookingModalOpened, onModalCloseBtnClick,
  } = props;

  return (
    <S.Main>
      <S.PageImage
        src={`${PUBLIC_FOLDER}/${coverImg}`}
        alt={`Квест${title}`}
        width="1366"
        height="768"
      />
      <S.PageContentWrapper>
        <S.PageHeading>
          <S.PageTitle>{title}</S.PageTitle>
          <S.PageSubtitle>приключения</S.PageSubtitle>
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
              <S.FeatureTitle>{MapToComplexityName[level]}</S.FeatureTitle>
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

      {isBookingModalOpened
        && (
        <BookingModal
          handleBookingCloseBtn={onModalCloseBtnClick}
        />
        )}
    </S.Main>
  );
}

export default DetailedQuestInfo;
