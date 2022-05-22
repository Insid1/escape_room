import NavigationLink from 'components/common/navigation-link/navigation-link';
import { mapToNavigationLinksName } from 'consts/maps';
import * as S from './navigation.styled';

function NavigationPanel() {
  return (
    <S.Navigation>
      <S.Links>
        {Object.entries(mapToNavigationLinksName).map(([
          key,
          { title, to },
        ]) => (
          <S.LinkItem key={key}>
            <NavigationLink to={to}>{title}</NavigationLink>
          </S.LinkItem>
        ))}
      </S.Links>
    </S.Navigation>
  );
}

export default NavigationPanel;
