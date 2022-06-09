import React from "react";
const DropDown = (props) => {
  const handleDropDownChange = (e) => {
    props.handleDropDownChange(e);
  };

  return (
    <div>
      <select
        value={props.dropDown}
        name="dropDown"
        onChange={handleDropDownChange}
      >
        <option>Filter By Region</option>
        {props?.uniqueData?.map((ele, i) => {
          return (
            <option key={i} value={ele}>
              {ele}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default DropDown;
