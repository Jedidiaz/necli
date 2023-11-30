import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { Slide, Snackbar, Stack } from "@mui/material";
import { bank } from "../../../utils/instance";
import useUser from "../../../hooks/useUser";

const Movements = () => {
  const [movements, setMovements] = useState([]);
  const [message, setMessage] = useState("");
  const { id } = JSON.parse(localStorage.getItem("user"));

  //Fetching de movimientos
  const getMovements = async () => {
    try {
      const movements = await bank
        .get(`movements/${id}`)
        .then((res) => res.data);
      setMovements(movements);
      console.log(movements);
    } catch (error) {
      setMessage(error.response.data.msg);
    }
  };

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <Layout>
      <Stack></Stack>
      <Snackbar
        open={!!message}
        onClose={() => setMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={(props) => {
          return <Slide {...props} direction="left" />;
        }}
        message={message}
        autoHideDuration={2000}
      />
    </Layout>
  );
};

export default Movements;
