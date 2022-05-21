import * as S from './container.styled';

function Container({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <S.Container {...props}>{children}</S.Container>;
}

export default Container;
