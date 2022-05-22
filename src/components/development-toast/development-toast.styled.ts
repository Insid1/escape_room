import styled from 'styled-components';
import { Container } from 'components/common/common';

const Main = styled(Container)`
  max-width: 1080px;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    max-width: initial;
    padding-left: 32px;
    padding-right: 33px;
  }

`;

export { Main };
