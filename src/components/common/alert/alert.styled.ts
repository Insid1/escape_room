import styled, { css } from 'styled-components';

interface IAlert {
  isError?: boolean
}

const Alert = styled.div<IAlert>`
  text-align: center;
  padding: 0.5em;
  margin: 1em;
  border-radius: 0.5em;
  color: ${({ theme }) => theme.color.whiteSmoke};;
  background-color: ${({ theme }) => theme.color.teal};;

  ${({ isError }) => isError
    && css`
      background-color: ${({ theme }) => theme.color.pink};;
    `}
`;

export { Alert };
