export const COUNTRIES_DATA = "COUNTRIES_DATA";
export const COUNTRIES_DATA_SUCCESS = "COUNTRIES_DATA_SUCCESS";
export const getData = () => {
  return {
    type: "COUNTRIES_DATA",
  };
};
export const dataSuccess = () => {
  return {
    type: "COUNTRIES_DATA_SUCCESS",
  };
};
