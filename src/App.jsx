import { Card, CardContent, Typography } from "@mui/material";
import "./theme/App.css";

import CurrentDate from "./components/CurrentDate";
import SheetList from "./components/SheetList";

function App() {
  return (
    <>
      <CurrentDate />
      <SheetList />
    </>
  );
}

export default App;
