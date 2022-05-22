import {
  MainLayout,
  PageTitle,
  PageHeading,
  Link,
} from 'components/common/common';
import { AppRoutes } from 'consts/routes';
import * as S from './development-toast.styled';

function DevelopmentToast() {
  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Страница находится в разработке</PageTitle>
        </PageHeading>
        <Link to={AppRoutes.Main}>Перейти на главную</Link>
      </S.Main>
    </MainLayout>
  );
}

export default DevelopmentToast;
