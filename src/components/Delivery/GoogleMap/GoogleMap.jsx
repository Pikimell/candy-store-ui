import React, { useState } from 'react';
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import { Button, Typography } from 'antd';

const { Title } = Typography;

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const GoogleMap = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

  const handleClick = event => {
    setSelectedPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setInfoVisible(true);
  };

  const handleLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setSelectedPosition(pos);
          setInfoVisible(true);
        },
        () => {
          alert('Error: The Geolocation service failed.');
        },
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleClick}
        >
          {selectedPosition && (
            <Marker position={selectedPosition}>
              {infoVisible && (
                <InfoWindow position={selectedPosition}>
                  <div>Address selected!</div>
                </InfoWindow>
              )}
            </Marker>
          )}
        </GoogleMap>
      </LoadScript>

      <Button onClick={handleLocationButtonClick} style={{ marginTop: '10px' }}>
        Pan to Current Location
      </Button>

      {selectedPosition && (
        <div style={{ marginTop: '20px' }}>
          <Title level={4}>
            Selected Latitude: {selectedPosition.lat}, Longitude:{' '}
            {selectedPosition.lng}
          </Title>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;
