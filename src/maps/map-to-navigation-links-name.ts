import { AppRoutes } from 'consts/routes';

type MapToNavigationLinksNameScheme = {
  [key in keyof typeof AppRoutes]?: {
    to: AppRoutes,
    title: string,
  }
};

const mapToNavigationLinksName: MapToNavigationLinksNameScheme = {
  Main: {
    to: AppRoutes.Main,
    title: 'Квесты',
  },
  Newbie: {
    to: AppRoutes.Newbie,
    title: 'Новичкам',
  },
  Reviews: {
    to: AppRoutes.Reviews,
    title: 'Отзывы',
  },
  Promo: {
    to: AppRoutes.Promo,
    title: 'Акции',
  },
  Contacts: {
    to: AppRoutes.Contacts,
    title: 'Контакты',
  },
};

export { mapToNavigationLinksName };
