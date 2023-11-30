import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import Login from "./views/login";
import Home from "./views/dash/home";
import theme from "./utils/theme";
import Inicio from "./views";
import Transferencia from "./views/dash/transferencia";
import Movements from "./views/dash/movements";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" Component={Inicio} />
          <Route path="/login" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/transferir" Component={Transferencia} />
          <Route path="/movements" Component={Movements} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
