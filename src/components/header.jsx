import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { colors } from "../utils/colors";

const Header = () => {
  return (
    <Stack bgcolor={colors.bgColor} sx={{ borderBottom: "1px solid #e7e9ea" }}>
      <Container>
        <Stack direction="row" alignItems="center" height="70px">
          <Stack direction="row" gap={0.6} sx={{ userSelect: "none" }}>
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
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
