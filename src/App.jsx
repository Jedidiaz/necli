import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import bg from "./assets/ngNecli.png";

import Login from "./views/login";
import Home from "./views/dash/home";
import theme from "./utils/theme";
import Inicio from "./views";
import { Stack } from "@mui/material";
import Header from "./components/header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        minHeight="100vh"
        sx={{ background: `center /cover no-repeat url('${bg}') #fbe5f2` }}
      >
        <Header />
        <Router>
          <Routes>
            <Route path="/" Component={Inicio} />
            <Route path="/login" Component={Login} />
            <Route path="/home" Component={Home} />
          </Routes>
        </Router>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
