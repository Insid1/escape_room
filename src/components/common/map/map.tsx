import type { LatLngExpression } from 'leaflet';
import type { MapContainerProps } from 'react-leaflet';
import { Marker, TileLayer } from 'react-leaflet';
import { iconGeneral } from './icons/icons';
import * as S from './map.styled';

const MAP_ATTRIBUTION = `&copy;
<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
contributors 
&copy;
<a href="https://carto.com/attributions">CARTO</a>`;
const MAP_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

const DEFAULT_ZOOM = 16;

type MapProps = {
  $width?: number;
  $height?: number;
  center: LatLngExpression;
  zoom?: number;
} & MapContainerProps;

function Map({ center, zoom = DEFAULT_ZOOM, ...rest }: MapProps) {
  return (
    <S.MapContainer
      {...rest}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={MAP_ATTRIBUTION}
        url={MAP_URL}
      />
      <Marker icon={iconGeneral} position={center} />
    </S.MapContainer>
  );
}

export default Map;
