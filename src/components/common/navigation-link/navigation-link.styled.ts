import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'components/common/common';
import { LinkProps } from 'react-router-dom';

interface NavigationLinkProps extends LinkProps {
  readonly $isActiveLink?: boolean;
}

const NavigationLink = styled(RouterLink)<NavigationLinkProps>`
  display: block;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};

  ${({ $isActiveLink }) => $isActiveLink
    && css`
      color: ${({ theme }) => theme.color.tangerine};
    `}

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export { NavigationLink };
