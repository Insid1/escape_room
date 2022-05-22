import React from 'react';
import { Alert, Loader } from '../common';
import * as S from './toast-loading.styled';

interface ToastLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoaded: boolean,
  height?: number,
  children: React.ReactElement,
  errorMessage: string | null
}

function ToastLoading({
  isLoaded, errorMessage, height, children, ...rest
}: ToastLoadingProps) {
  return (
    isLoaded
      ? children
      : (
        <S.ToastLoadingContainer {...rest} height={height}>
          {(errorMessage === null && <Loader />)
            || <Alert isError>{errorMessage}</Alert>}
        </S.ToastLoadingContainer>
      )

  );
}

export default ToastLoading;
