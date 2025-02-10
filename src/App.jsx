import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import UserContextProvider from "./context/userContextProvider";
import { DashBoard } from "./component/DashBoard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Insights } from "./component/Insights";
import { Layout } from "./component/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#B95C50",
    },
    secondary: {
      main: "#4CAF50",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DashBoard />} />
              <Route path="/insights" element={<Insights />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
