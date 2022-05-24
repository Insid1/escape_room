import {
  MainLayout,
  PageTitle,
  PageHeading,
  Link,
} from 'components/common/common';
import { AppRoutes } from 'consts/routes';
import * as S from './not-found.styled';

function NotFoundPage() {
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Страница не найдена</PageTitle>
        </PageHeading>
        <Link to={AppRoutes.Main}>Перейти на главную</Link>
      </S.Main>
    </MainLayout>
  );
}

export default NotFoundPage;
