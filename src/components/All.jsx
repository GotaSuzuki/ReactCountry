import React from 'react'
import { useRecoilValue } from 'recoil';
import { countryState } from '../states/countryState';
import './country.css';

const All = () => {
  const countries = useRecoilValue(countryState);
  return (
    <div className="container">
      {countries.map((country, index) => (
        <div className="card" key={index}>
          <p>{`${country.name.common}(${country.capital})[${country.cca3}]`}</p>
          <img src={country.flags.png} alt="" />
        </div>
      ))}
    </div>
  )
}

export default All