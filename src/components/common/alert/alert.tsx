import * as S from './alert.styled';

interface IAlert extends React.HTMLAttributes<HTMLDivElement> {
  isError?: boolean,
}

function Alert({ isError = false, children, ...props }: IAlert) {
  return (
    <S.Alert isError={isError} {...props}>{children}</S.Alert>
  );
}

export default Alert;
