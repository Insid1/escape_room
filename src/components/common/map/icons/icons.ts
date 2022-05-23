import IconMapMarker from 'assets/img/icon-map-marker.svg';
import L from 'leaflet';

const iconSize = [48, 62];

const iconGeneral = new L.Icon({
  iconUrl: IconMapMarker,
  iconRetinaUrl: IconMapMarker,
  iconSize: [48, 62],
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
});

export { iconGeneral };
