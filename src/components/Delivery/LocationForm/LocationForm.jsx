import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import { Button, Flex, Typography } from 'antd';
import { getDistancePrice } from '../../../api/googleMapsApi';
import { useEffect } from 'react';
import { getLocation } from '../../../helpers/geolocation';
import style from './LocationForm.module.css';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
const { Title } = Typography;

const initialAddress = {
  lat: 38.7816336,
  lng: -9.1640982,
};

const DeliveryForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [center, setCenterLocation] = useState(null);
  const [deliveryCost, setDeliveryCost] = useState(null);

  const calculateDistance = async () => {
    if (!selectedLocation) {
      alert('Please select a location on the map.');
      return;
    }

    const destination = `${selectedLocation.lat},${selectedLocation.lng}`;
    const origin = `${initialAddress.lat},${initialAddress.lng}`;

    const result = await getDistancePrice(origin, destination);

    setDeliveryCost(result.cost);
  };

  const handleMapClick = e => {
    setSelectedLocation({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getLocation();
        setCenterLocation(data);
      } catch {}
    }

    fetchData();
  }, []);

  return (
    <Flex className={style.form} vertical align="center" justify="center">
      <Title level={3}>Calculate Delivery Cost</Title>

      <GoogleMaps
        center={center}
        select={selectedLocation}
        init={initialAddress}
        handleClick={handleMapClick}
      />

      <Button
        type="primary"
        onClick={calculateDistance}
        style={{ marginTop: '20px' }}
      >
        Calculate Delivery Cost
      </Button>

      {deliveryCost && (
        <div style={{ marginTop: '20px' }}>
          <Title level={4}>Delivery Cost: €{deliveryCost}</Title>
        </div>
      )}
    </Flex>
  );
};

export default DeliveryForm;
