import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./Actions/countriesActions";
import SearchByName from "./Components/SearchByName";
import { Route } from "react-router-dom";
import Countries from "./Components/Countries";
import AllCountries from "./Components/AllCountries";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <Route path="/" component={Countries} exact={true} />
      <Route path="/:id" component={SearchByName} />
    </div>
  );
};
export default App;
