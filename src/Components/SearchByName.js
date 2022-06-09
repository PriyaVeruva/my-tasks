import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavBar from "./NavBar";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardHeader,
  Container,
} from "@mui/material";

import { Link, withRouter, Route } from "react-router-dom";
const SearchByName = (props) => {
  const [country, setCountry] = useState({});
  const dispatch = useDispatch();

  const countries = useSelector((state) => {
    return state.countries;
  });
  useEffect(() => {
    if (countries.length > 0) {
      const result = countries.find(
        (ele) => ele.name === props.match.params.id
      );
      setCountry(result);
    }
  }, [countries]);
  return (
    <div>
      <NavBar />

      <Link to="/" style={{ textDecoration: "none", textAlign: "revert" }}>
        <ArrowBackIcon style={{ paddingTop: "30px" }} />
        Back
      </Link>

      {Object.keys(country).length > 0 && (
        <div>
          <div style={{ paddingLeft: "5%" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item md={4} xs={12}>
                <img
                  src={country.flags && country.flags.png}
                  style={{ display: "flex", marginTop: 5 }}
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <h3>{country.name}</h3>
                <br />
                <p>NativeName:{country.nativeName}</p>
                <br />
                <p>Population:{country.population}</p>
                <br />

                <p>Region:{country.region}</p>
                <br />
                <p>SubRegion:{country.subregion}</p>
                <br />
                <p>Capital:{country.capital}</p>
                <br />
              </Grid>
              <Grid item md={3} xs={12}>
                <p>TopLevelDomain:{country.topLevelDomain}</p>
                <br />
                <p>Currencies:{country.currencies.map((ele) => ele.name)}</p>
                <br />
                <p>
                  Languages:{country.languages.map((ele) => ele.name + ",")}
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};
export default withRouter(SearchByName);
