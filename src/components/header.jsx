import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Movimientos", redirect: "/movements", variant: "text" },
  { label: "Transferir", redirect: "/transferir", variant: "contained" },
];

const Header = () => {
  const [log, setLog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/login") setLog(true);
    else setLog(false);
  }, []);

  return (
    <Stack bgcolor={colors.bgColor} sx={{ borderBottom: "1px solid #e7e9ea" }}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          height="70px"
          justifyContent={log ? "space-between" : "flex-start"}
        >
          {/* Logo de necli */}
          <Stack
            direction="row"
            gap={0.6}
            sx={{ userSelect: "none", cursor: "pointer" }}
            onClick={() => {
              if (log) {
                navigate("/home");
              } else {
                return;
              }
            }}
          >
            <Box
              sx={{
                width: "12px",
                height: "12px",
                bgcolor: colors.primary,
                borderRadius: "2px",
                mt: 1.2,
              }}
            >
              &nbsp;
            </Box>
            <Typography variant="h3" fontWeight={800}>
              Necli
            </Typography>
          </Stack>
          {/* Botones */}
          {log && (
            <Stack direction="row" spacing={2}>
              {links.map((item, index) => (
                <Button
                  variant={item.variant}
                  key={index}
                  onClick={() => navigate(item.redirect)}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
