import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const GoogleMap = () => {
    return (
        <div className='w-full h-[547px]'>
            <MapContainer center={[40.7128, -74.0060]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[40.7128, -74.0060]}>
                    <Popup>New York City, USA</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default GoogleMap;