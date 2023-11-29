import { Stack, Typography } from "@mui/material";
import React from "react";
import useUser from "../../../hooks/useUser";

const Home = () => {
  const { user } = useUser();
  return (
    <Stack>
      <Typography>{user?.name}</Typography>
    </Stack>
  );
};

export default Home;
