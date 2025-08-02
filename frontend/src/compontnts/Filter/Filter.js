import { useState } from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className='app-block filter'>
      <div className='filter-group'>
        <input type='text' placeholder='Fitlter by title...'></input>
      </div>
    </div>
  );
};

export default Filter;
