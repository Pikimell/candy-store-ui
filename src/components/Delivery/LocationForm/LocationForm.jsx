import style from './LocationForm.module.css';
import { useState } from 'react';

const LocationForm = ({}) => {
  return (
    <div className="nes-container is-rounded">
      <form className={style.form}>
        <div class="nes-field">
          <label for="loc1">Location 1</label>
          <input type="text" id="loc1" name="loc1" class="nes-input" />
        </div>

        <div class="nes-field">
          <label for="loc2">Location 1</label>
          <input type="text" id="loc2" name="loc2" class="nes-input" />
        </div>

        <button className="nes-btn is-primary">Update Price</button>
      </form>
    </div>
  );
};

export default LocationForm;
