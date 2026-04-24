import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// fixing default marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


export const MapWrapper = ({ places }) => {
    let positions = places.map(p => [p.lat, p.lng]);
    let center = positions.length > 0 ? positions[0] : [19.9975, 73.7898]; // cbs

    return (
        <div style={{height: '100%', width: '100%'}}>
            <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%', borderRadius: '8px' }} className="dark-map-filter">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {places.map((p, idx) => (
                    <Marker key={p.id} position={[p.lat, p.lng]}>
                        <Popup>{p.name}</Popup>
                    </Marker>
                ))}
                
                {positions.length > 1 && (
                    <Polyline positions={positions} color="#c9a84c" weight={4} opacity={0.7} />
                )}
            </MapContainer>
        </div>
    );
};
