import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { QuestType } from 'consts/enums';
import { mapToTypeName } from './map-to-type-name';

type MapToFilterPropertyScheme = Record<QuestType, {
  title: string,
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}>;

const mapToFilterProperty: MapToFilterPropertyScheme = {
  [QuestType.All]: {
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  [QuestType.Adventures]: {
    title: mapToTypeName[QuestType.Adventures],
    icon: IconAdventures,
  },
  [QuestType.Horror]: {
    title: mapToTypeName[QuestType.Horror],
    icon: IconHorrors,
  },
  [QuestType.Mystic]: {
    title: mapToTypeName[QuestType.Mystic],
    icon: IconMystic,
  },
  [QuestType.Detective]: {
    title: mapToTypeName[QuestType.Detective],
    icon: IconDetective,
  },
  [QuestType.SciFi]: {
    title: mapToTypeName[QuestType.SciFi],
    icon: IconScifi,
  },
};
export { mapToFilterProperty };
