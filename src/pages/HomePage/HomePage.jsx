import style from './HomePage.module.css';
import { useState } from 'react';
import LocationForm from '../../components/Delivery/LocationForm/LocationForm.jsx';

const HomePage = ({}) => {
  return (
    <div>
      <LocationForm />
    </div>
  );
};

export default HomePage;
