import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Test from "./pages/Test";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import PageLayout from "./components/Layout";

let theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      main: "#610C63",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/Test" element={<Test />} />
            <Route path="/" element={<Notes />} />
            <Route path="/Create" element={<Create />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
