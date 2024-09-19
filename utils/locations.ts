import api from "@/lib/api";

export const getCountries = async () => {
  try {
    return await api.getCountries();
  } catch(e) {
    console.error(`Failed to fetch countries: ${e}`);
  };
};

export const getStates = async (countryCode: string) => {
  try {
    return await api.getStates(countryCode);
  } catch(e) {
    console.error(`Failed to fetch states: ${e}`);
  };
};

export const getCities = async (countryCode: string, stateCode: string) => {
  try {
    return await api.getCities(countryCode, stateCode);
  } catch(e) {
    console.error(`Failed to fetch cities: ${e}`);
  };
};
