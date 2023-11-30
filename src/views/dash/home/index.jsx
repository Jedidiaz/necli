import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useUser from "../../../hooks/useUser";
import Layout from "../../../components/layout";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../../../utils/colors";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [copy, setCopy] = useState(false);

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(user?.account);
    setCopy(true);
    let timer = 0;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setCopy(false);
    }, 500);
  };

  return (
    <Layout>
      <Stack mt={6}>
        <Container>
          <Stack gap={{ xs: 10, sm: 20 }}>
            {/* header */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="start"
              flexWrap="wrap"
              gap={2}
            >
              {/* Usuario */}
              <Stack direction="row" gap={2}>
                <Stack
                  bgcolor="rgba(0,0,0,.15)"
                  minWidth="55px"
                  minHeight="55px"
                  borderRadius={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <PersonIcon fontSize="large" color="secondary" />
                </Stack>
                <Stack>
                  <Typography
                    variant="h6"
                    fontSize="20px"
                    fontWeight={500}
                    sx={{ lineHeight: "100%" }}
                  >
                    Bienvenid@ de vuelta,
                  </Typography>
                  <Typography variant="body1" fontWeight={600} fontSize="22px">
                    {user?.name}
                  </Typography>
                </Stack>
              </Stack>
              {/* Sign out */}
              <Stack direction="row" gap={1} alignItems="start">
                {/* Cuenta */}
                <Stack
                  px={2}
                  py={0.3}
                  bgcolor={colors.secondary}
                  borderRadius={2}
                  direction="row"
                  spacing={2}
                  boxShadow="0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
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
                  <Tooltip title="Copy" placement="top">
                    <IconButton
                      sx={{ color: colors.bgColor }}
                      onClick={handleCopy}
                    >
                      {copy ? <CheckCircleIcon /> : <ContentPasteIcon />}
                    </IconButton>
                  </Tooltip>
                </Stack>
                {/* Cerrar sesión */}
                <Tooltip title="Sign out" placement="top">
                  <Button
                    bgcolor={colors.secondary}
                    sx={{ color: colors.bgColor, py: 1.3, borderRadius: 2 }}
                    onClick={handleSignOut}
                  >
                    <LogoutIcon fontSize="medium" />
                  </Button>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack alignItems="center">
              <Stack textAlign="center" width="100%" maxWidth="300px">
                <Typography variant="h2" fontWeight={700}>
                  {`$ ${user?.money}.00`}
                </Typography>
                <Box
                  width="100%"
                  height="3px"
                  sx={{ backgroundColor: colors.primary }}
                >
                  &nbsp;
                </Box>
                <Typography variant="subtitle1" fontWeight={700}>
                  Dinero disponible
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Layout>
  );
};

export default Home;
