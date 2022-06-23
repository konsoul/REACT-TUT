import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
