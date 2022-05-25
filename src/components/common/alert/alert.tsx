import { DataTestAttribute } from 'test-utils/data-test-atributes';
import * as S from './alert.styled';

interface IAlert extends React.HTMLAttributes<HTMLDivElement> {
  isError?: boolean,
}

function Alert({ isError = false, children, ...props }: IAlert) {
  return (
    <S.Alert
      isError={isError}
      {...props}
      data-testid={isError ? DataTestAttribute.AlertError : DataTestAttribute.AlertSuccess}
    >
      {children}
    </S.Alert>
  );
}

export default Alert;
