import styled from 'styled-components';

interface ToastLoadingContainerProps {
  height?: number;
}

const ToastLoadingContainer = styled.div<ToastLoadingContainerProps>`
  display: flex ;
  justify-content: center;
  align-items: center;
  /* height: 200px; */
  height: ${({ height }) => height || ''}px;
`;

export { ToastLoadingContainer };
