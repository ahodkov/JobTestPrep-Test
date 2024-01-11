import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const OperatorSelect = (props) => {
  const handleChange = (event) => {
    props.setOperator(event.target.value);
  };

  const operators = ["+", "-", "/", "*"];

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Operator</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.operator}
          label="Age"
          onChange={handleChange}
        >
          {operators.map((elem) => (
            <MenuItem value={elem} key={elem}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default OperatorSelect;
