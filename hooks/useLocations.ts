import { useState, useEffect } from "react";
import { ICountry, IState, ICity } from "@/lib/api";
import api from "@/lib/api";

const useLocations = () => {
  const [countries, setCountries] = useState<ICountry[] | null>();
  const [states, setStates] = useState<IState[] | null>();
  const [cities, setCities] = useState<ICity[] | null>();

  const [countryCode, setCountryCode] = useState<string | undefined>("");
  const [stateCode, setStateCode] = useState<string | undefined>("");

  const fetchStates = (countryName: string) => {
    const foundCountry = countries?.find(
      (country) => country.displayValue === countryName,
    );
    setCountryCode(foundCountry?.value);
  };

  const fetchCities = (stateName: string) => {
    const foundState = states?.find(
      (state) => state.displayValue === stateName,
    );
    setStateCode(foundState?.value);
  };

  const getCountries = async () => {
    try {
      const data = await api.getCountries();
      setCountries(data);
    } catch (e) {
      console.error(`Failed to fetch countries: ${e}`);
    }
  };

  const getStates = async () => {
    try {
      const data = await api.getStates(countryCode as string);
      setStates(data);
    } catch (e) {
      console.error(`Failed to fetch states: ${e}`);
    }
  };

  const getCities = async () => {
    try {
      const data = await api.getCities(
        countryCode as string,
        stateCode as string,
      );
      setCities(data);
    } catch (e) {
      console.error(`Failed to fetch cities: ${e}`);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (countryCode) {
      getStates();
    }
  }, [countryCode]);

  useEffect(() => {
    if (stateCode) {
      getCities();
    }
  }, [stateCode]);

  return { countries, states, cities, fetchStates, fetchCities };
};

export default useLocations;
