import React from 'react';
import * as S from './page-title.styled';

function PageTitle(
  { children, ...props }: { children: React.ReactElement[] | React.ReactElement | string },
) {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
}

export default PageTitle;
