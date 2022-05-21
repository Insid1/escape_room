import React from 'react';
import * as S from './page-title.styled';

function PageTitle(
  { children, ...props }: React.HTMLAttributes<HTMLHeadingElement>,
) {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
}

export default PageTitle;
