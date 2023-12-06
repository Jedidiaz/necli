import { Input, Stack, TextField } from "@mui/material";
import React from "react";
import { colors } from "../utils/colors";

const StyledInput = ({
  name,
  change = () => {},
  type = "text",
  label = "none",
  value = "",
}) => {
  return (
    <Stack>
      <TextField
        type={type}
        name={name}
        label={label}
        inputProps={{
          style: {
            color: colors.fontColor,
            backgroundColor: colors.bgInputColor,
            borderRadius: "5px",
          },
        }}
        value={value}
        sx={{
          borderRadius: "5px",
          "input::-webkit-inner-spin-button": {
            appearance: "none",
          },
        }}
        fullWidth
        onChange={change}
      />
    </Stack>
  );
};

export default StyledInput;
