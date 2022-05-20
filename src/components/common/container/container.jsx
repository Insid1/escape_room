import * as S from './container.styled';

function Container({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

export default Container;
