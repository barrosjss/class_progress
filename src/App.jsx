import { Card, CardContent, Typography } from "@mui/material";
import "./App.css";
import CurrentDate from "./components/CurrentDate";

function App() {
  return (
    <>
      <CurrentDate />
      <Card className="card">
        <CardContent>
          <Typography variant="h5" component="div">
            Nombre
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subnombre
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
