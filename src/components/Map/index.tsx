import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './styles.module.css';

export default function Map() {
  const position: [number, number] = [-8.0476, -34.8770];

  return (
    <MapContainer
      center={position} 
      zoom={13}
      className={styles.mapContainer}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <Marker position={position}>
        <Popup>
          <div className={styles.popupContent}>
            <h3>Recife, Pernambuco</h3>
            <p>Bem-vindo à cidade do frevo e maracatu!</p>
            <img
              src="https://cdn.blablacar.com/wp-content/uploads/br/2023/10/05095944/recife-pe.webp"
              alt="Recife"
              className={styles.popupImage}
            />
            <button className={styles.popupButton}>Saiba Mais</button>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
