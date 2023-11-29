import { Box, Card, CardContent, Typography } from "@mui/material";
import CurrentDate from "./components/CurrentDate";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <>
     <Box sx={{padding: '0 1pc', width: '91%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
     <CurrentDate />
      <ProgressBar />
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
     </Box>
    </>
  );
}

export default App;
