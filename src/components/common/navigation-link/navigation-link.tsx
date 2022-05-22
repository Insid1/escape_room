import { useMatch, LinkProps } from 'react-router-dom';
import * as S from './navigation-link.styled';

function NavigationLink({ to, children, ...rest }: LinkProps) {
  const match = useMatch(to.toString());
  return (
    <S.NavigationLink $isActiveLink={Boolean(match)} {...rest} to={to}>
      {children}
    </S.NavigationLink>
  );
}

export default NavigationLink;
