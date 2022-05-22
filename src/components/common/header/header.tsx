import logo from 'assets/img/logo.svg';
import NavigationPanel from '../navigation-panel/navigation';
import * as S from './header.styled';

function Header() {
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>
        <NavigationPanel />
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
