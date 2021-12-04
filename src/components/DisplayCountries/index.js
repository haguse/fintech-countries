import React, { useEffect, useState } from "react";
import axios from "axios";
const DisplayCountries = ({ searchQuery }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setAllCountries(res.data);
      setFilteredCountries(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      allCountries.filter((country) =>
        country?.capital?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, allCountries]);

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Region</th>
            <th scope="col">Flag</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country) => (
            <tr key={country.alpha3Code}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td>
                <img
                  style={{ width: "30px", height: "20px" }}
                  src={country.flags.png}
                  alt={`${country} Flag`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCountries;
