const intialData = [];
const countries = (state = intialData, action) => {
  switch (action.type) {
    case "COUNTRIES_DATA_SUCCESS": {
      return [...action.data];
    }

    default: {
      return [...state];
    }
  }
};
export default countries;
