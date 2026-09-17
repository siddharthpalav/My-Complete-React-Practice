import React, { useEffect, useState } from "react";
// import countriesData from '../countriesData'
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      <div className='countries-container'>
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query),
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
            );
          })}
      </div>
    </>
  );
}
