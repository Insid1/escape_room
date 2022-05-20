import * as S from './page-subtext.styled';

function PageSubtext({ children, ...props }) {
  return <S.PageSubtext {...props}>{children}</S.PageSubtext>;
}

export default PageSubtext;
