import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { QuestType } from 'consts/enums';

type MapToItemPropertyType = {
  [key in QuestType]: {
    title: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  }
};

const MapToItemProperty: MapToItemPropertyType = {
  [QuestType.All]: {
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  [QuestType.Adventures]: {
    title: 'Приключения',
    icon: IconAdventures,
  },
  [QuestType.Horror]: {
    title: 'Ужасы',
    icon: IconHorrors,
  },
  [QuestType.Mystic]: {
    title: 'Мистика',
    icon: IconMystic,
  },
  [QuestType.Detective]: {
    title: 'Детектив',
    icon: IconDetective,
  },
  [QuestType.SciFi]: {
    title: 'Sci-Fi',
    icon: IconScifi,
  },
};
export { MapToItemProperty };
