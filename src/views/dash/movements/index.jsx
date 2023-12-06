import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import {
  Box,
  Container,
  Slide,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { bank } from "../../../utils/instance";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { colors } from "../../../utils/colors";

const Movements = () => {
  const [movements, setMovements] = useState([]);
  const [message, setMessage] = useState("");
  const { id, account } = JSON.parse(localStorage.getItem("user"));

  //Fetching de movimientos
  const getMovements = async () => {
    try {
      const movements = await bank
        .get(`movements/${id}`)
        .then((res) => res.data);
      setMovements(movements);
    } catch (error) {
      setMessage(error.response.data.msg);
    }
  };

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <Layout>
      {/* Contenedor */}
      <Container>
        <Stack gap={2} alignItems="center" mt={8}>
          {movements.map((card) => (
            <Stack
              width="100%"
              maxWidth="500px"
              spacing={1}
              key={card.id_transaction}
              bgcolor={colors.bgColor}
              px={3}
              py={2}
              borderRadius={2}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            >
              {/* header card */}
              <Stack direction="row" gap={2} justifyContent="space-between">
                <Typography variant="subtitle1">
                  {card.account_usuario_send === account
                    ? card.name_user_recive
                    : card.name_user_send}
                </Typography>
                <Typography variant="subtitle1">
                  {"$ " + card.amount}
                </Typography>
              </Stack>
              {/* footer card */}
              <Stack direction="row" gap={2} justifyContent="space-between">
                <Box>
                  <ExpandCircleDownOutlinedIcon
                    sx={
                      card.account_usuario_send === account
                        ? {
                            transform: "rotate(180deg)",
                            color: colors.primary,
                          }
                        : { color: "green" }
                    }
                  />
                </Box>
                <Typography variant="caption">04/12/2023</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
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
