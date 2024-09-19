import style from './GoogleMaps.module.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const apiKey = 'AIzaSyAlKkxVbuBIwkLcK7cIYPI2oUhaJGPrTHM';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '400px',
  borderRadius: '10px',
  boxShadow: '2px 2px 10px 2px black',
  border: '1px solid black',
};

const GoogleMaps = ({ center, select, init, handleClick }) => {
  return (
    <div className={style.container}>
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleClick}
        >
          {select && <Marker position={select} />}
          {select && <Marker position={init} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMaps;
