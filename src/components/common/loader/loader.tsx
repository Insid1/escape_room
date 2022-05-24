import { DataTestAttribute } from 'consts/data-test-atributes';
import * as S from './loader.styled';

function Loader() {
  return (
    <S.LoaderWrapper>
      <S.Loader data-testid={DataTestAttribute.Loader} />
    </S.LoaderWrapper>
  );
}

export default Loader;
