import React from 'react';
import * as S from './page-subtext.styled';

function PageSubtext({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <S.PageSubtext {...props}>{children}</S.PageSubtext>;
}

export default PageSubtext;
