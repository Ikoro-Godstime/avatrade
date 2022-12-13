import { useEffect, useState } from "react";

export function useCountry() {
  const [country, setCountry] = useState([]);
  const [disable, setDisable] = useState(true);
  // fetch countries
  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country) => {
        return {
          main: country.country,
        };
      });
      setCountry(countries);
    } catch (error) {
      setDisable(true);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return { country, disable };
}
