import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton } from "@mui/material";
const Search = (props) => {
  return (
    <>
      <TextField
        value={props.searchText}
        type="text"
        placeholder="Search for a Country...."
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
        style={{
          marginTop: 20,
          marginBottom: 20,
          width: { xs: "100%", sm: "100%", md: "40%", lg: "40%" },
          textAlign: "center",
        }}
        onChange={(e) => {
          props.handleSearchChange(e);
        }}
      />
    </>
  );
};

export default Search;
