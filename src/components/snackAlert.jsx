import { Snackbar } from "@mui/material";
import React from "react";

const SnackAlert = ({ open, setOpen, message }) => {
  return (
    <>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={<Slide {...props} direction="left" />}
        message={message}
        action={() => setOpen(false)}
      />
    </>
  );
};

export default SnackAlert;
