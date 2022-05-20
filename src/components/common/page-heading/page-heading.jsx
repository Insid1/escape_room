import * as S from './page-heading.styled';

function PageHeading({ children, ...props }) {
  return <S.PageHeading {...props}>{children}</S.PageHeading>;
}

export default PageHeading;
