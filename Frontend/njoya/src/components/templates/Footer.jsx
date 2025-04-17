import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Clock, Truck } from 'lucide-react';
import  './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Section supérieure avec courbe */}
      {/* Contenu principal */}
      <div className="footer-content">
        {/* Section Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-item"><Phone size={18} /> 01.02.44.55.66</p>
          <p className="footer-item"><Mail size={18} /> la.njoyance@outlook.fr</p>
          <p className="footer-item"><MapPin size={18} /> Île-de-France</p>
        </div>
        
        {/* Section Carte */}
        <div className="footer-map">
          <MapContainer center={[48.8566, 2.3522]} zoom={12} className="map-container">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.8566, 2.3522]}>
              <Popup>Notre boutique à Paris</Popup>
            </Marker>
          </MapContainer>
        </div>
        
        {/* Section Informations */}
        <div className="footer-section">
          <h3 className="footer-title">Information</h3>
          <p className="footer-item">Condition générales de vente</p>
          <p className="footer-item">Questions fréquentes</p>
          <p className="footer-item">Informations sur la livraison</p>
          <p className="footer-item">Mentions légales</p>
        </div>
      </div>

      {/* Section Réseaux sociaux et Infos supplémentaires */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <Facebook size={24} />
          <Twitter size={24} />
          <Instagram size={24} />
        </div>
        <div className="footer-info">
          <p className="footer-item"><Clock size={16} /> Disponible 24/7</p>
          <p className="footer-item"><Truck size={16} /> Livraison</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
