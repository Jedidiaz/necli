import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import useUser from "../../../hooks/useUser";
import Layout from "../../../components/layout";
import PersonIcon from "@mui/icons-material/Person";
import { colors } from "../../../utils/colors";

const Home = () => {
  const { user } = useUser();
  return (
    <Layout>
      <Stack mt={6}>
        <Container>
          <Stack gap={20}>
            {/* header */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {/* Usuario */}
              <Stack direction="row" gap={2}>
                <Stack
                  bgcolor="rgba(0,0,0,.15)"
                  width="55px"
                  height="55px"
                  borderRadius={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <PersonIcon fontSize="large" color="secondary" />
                </Stack>
                <Stack>
                  <Typography variant="h6" fontSize="20px" fontWeight={500}>
                    Bienvenid@ de vuelta,
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    mt={-1.3}
                    fontSize="22px"
                  >
                    {user?.name}
                  </Typography>
                </Stack>
              </Stack>
              {/* Vuenta */}
              <Stack
                px={2}
                py={0.3}
                bgcolor={colors.secondary}
                borderRadius={2}
                direction="row"
                spacing={2}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color={colors.bgColor}
                  fontSize="22px"
                >
                  No:
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color={colors.bgColor}
                  fontSize="22px"
                >
                  {user?.account}
                </Typography>
              </Stack>
            </Stack>
            <Stack alignItems="center">
              <Stack textAlign="center" width="100%" maxWidth="300px">
                <Typography variant="h2" fontWeight={700}>
                  {`$ ${user?.money}.00`}
                </Typography>
                <Typography variant="subtitle1" fontWeight={700}>
                  Dinero disponible
                </Typography>
                <Box
                  width="100%"
                  height="3px"
                  sx={{ backgroundColor: colors.bgColor }}
                >
                  &nbsp;
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  );
};

export default Home;
