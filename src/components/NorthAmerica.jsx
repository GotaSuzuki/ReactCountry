import React from 'react'
import { useRecoilValue } from 'recoil';
import { countryState } from '../states/countryState';

const NorthAmerica = () => {
  const countries = useRecoilValue(countryState);
  return (
    <div className="container">
      {countries.filter((country) => country.continents[0] === "North America")
        .map((country, index) => (
          <div className="card" key={index}>
            <p>{`${country.name.common}(${country.capital})[${country.continents[0]}]`}</p>
            <img src={country.flags.png} alt="" />
          </div>
        ))}
    </div>
  )
}

export default NorthAmerica