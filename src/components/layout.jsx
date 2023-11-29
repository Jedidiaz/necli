import { createContext } from "react";
import Header from "./header";
import { Stack } from "@mui/material";
import bg from "../assets/ngNecli.png";

const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <Stack
        minHeight="100vh"
        sx={{ background: `center /cover no-repeat url('${bg}') #fbe5f2` }}
      >
        <Header />
        {children}
      </Stack>
    </LayoutContext.Provider>
  );
};

export default Layout;
