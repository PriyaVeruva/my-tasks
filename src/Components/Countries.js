import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {
  Grid,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  CardHeader,
  Container,
} from "@mui/material";
import DropDown from "./DropDown";
import Search from "./Search";

const Countries = (props) => {
  const countries = useSelector((state) => {
    return state.countries;
  });
  console.log(countries, "countries");
  const [filteredData, setFilteredData] = useState();
  const [dropdownFilteredData, setDropdownFilteredData] = useState();
  const [dropDown, setDropDown] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredData(countries);
  }, [countries]);

  useEffect(() => {
    if (dropDown !== "Filter By Region") {
      const filterData = countries?.filter((list) =>
        list.region.toLowerCase().includes(dropDown.toLowerCase())
      );
      setFilteredData(filterData);
      setDropdownFilteredData(filterData);
    } else {
      setFilteredData(countries);
      setDropdownFilteredData(countries);
      setSearchText("");
    }
  }, [dropDown]);

  useEffect(() => {
    if (searchText.length === 0) {
      setFilteredData(dropdownFilteredData ? dropdownFilteredData : countries);
    } else {
      const countryDetails = filteredData ? filteredData : countries;
      const filterData = countryDetails?.filter((list) =>
        list.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filterData);
    }
  }, [searchText]);

  let uniqueData = [...new Set(countries.map((ele) => ele.region))];

  const handleDropDownChange = (event) => {
    const dropdownValue = event.target.value;
    setDropDown(dropdownValue);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
  };

  return (
    <>
      <NavBar />
      <div style={{ padding: "0 8% 0 5%" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Search
              searchText={searchText}
              handleSearchChange={handleSearchChange}
            />
          </Grid>
          <Grid item>
            <DropDown
              uniqueData={uniqueData}
              dropDown={dropDown}
              handleDropDownChange={handleDropDownChange}
            />
          </Grid>
        </Grid>
      </div>

      <Container>
        <Grid container spacing={1}>
          {filteredData?.map((ele) => (
            <Grid item key={ele.name} xs={12} lg={3} md={4} sm={6}>
              <Link to={ele.name} style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 245 }}>
                  <CardActionArea>
                    <CardHeader
                      title={
                        <img
                          src={ele.flags && ele.flags.png}
                          style={{
                            height: "130px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      }
                    />
                    <CardContent>
                      <Typography style={{ color: "black" }}>
                        {ele.name}
                      </Typography>
                      <br />
                      <Typography>Population:{ele.population}</Typography>
                      <Typography>Region:{ele.region}</Typography>

                      <Typography>Capital:{ele.capital}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Countries;
