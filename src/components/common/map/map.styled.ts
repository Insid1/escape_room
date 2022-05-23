import { MapContainer as MapRootContainer } from 'react-leaflet';
import styled from 'styled-components';

enum DefaultMapSize {
  Width = 649,
  Height = 336,
}

interface MapContainerProps {
  $width?: number;
  $height?: number;
}

const MapContainer = styled(MapRootContainer)<MapContainerProps>`
  height: ${({ $height }) => $height || DefaultMapSize.Height}px;
  width: ${({ $width }) => $width || DefaultMapSize.Width}px;
  border-radius: 10px;
`;

export { MapContainer };
