import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import moment from 'moment';

function ProgressBar() {
 const [cortes, setCortes] = useState([]);

 useEffect(() => {
 fetch('https://sheet.best/api/sheets/bfd29f56-4ca8-4972-90f3-2f95ebe8ebd9')
 .then(response => response.json())
 .then(data => setCortes(data));
 }, []);

 return (
 <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
 {cortes.map((corte, index) => {
  const fechaInicio = moment(corte["Fecha Inicio"], "DD/MM/YYYY").format("YYYY/MM/DD");
  const fechaFinalizacion = moment(corte["Fecha Finalizacion"], "DD/MM/YYYY").format("YYYY/MM/DD");
  const fechaInicioObj = new Date(fechaInicio);
  const fechaFinalizacionObj = new Date(fechaFinalizacion);
  const duracionTotal = fechaFinalizacionObj - fechaInicioObj;
  const tiempoTranscurrido = new Date() - fechaInicioObj;

  let progreso = 0;
  let diasTranscurridos = 0;
  let diasRestantes = 0;
  let barraColor = '#f55';

  // Si la fecha de inicio es mayor que la fecha actual, establecer el progreso a 0% y los días transcurridos a 0
  if (fechaInicioObj > new Date()) {
    diasRestantes = Math.floor((fechaFinalizacionObj - new Date()) / (1000 * 60 * 60 * 24));
  } else {
    progreso = (tiempoTranscurrido / duracionTotal) * 100;
    diasTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24));
    diasRestantes = Math.floor((fechaFinalizacionObj - new Date()) / (1000 * 60 * 60 * 24));
    barraColor = progreso < 50 ? '#000' : '#333';
  }

  return (
    <Box key={index} sx={{width: '100%', marginBottom: 2, height: 100, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.53)', borderRadius: 2, padding: '1pc'
}}>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold'}}>
        {corte["Corte"]}
      </Typography>
      <Box sx={{ width: '100%', height: 50,  display: 'flex', alignItems: 'center'}}>
        <Box sx={{ flexGrow: 1, height: 10, borderRadius: 50, backgroundColor: barraColor}}>
          <LinearProgress variant="determinate" value={progreso} sx={{ height: 10, borderRadius: 50, backgroundColor: 'red'}} />
        </Box>
        <Typography variant="body2" sx={{ marginLeft: 1 }}>
          {diasTranscurridos} días / {diasRestantes} días
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography sx={{fontSize: '0.6pc'}}>dias Transcurridos</Typography>
            /
            <Typography sx={{fontSize: '0.6pc'}}>diasTranscurridos</Typography>
            </Box>
        </Typography>
      </Box>
      <Typography variant="body2">
        {Math.round(progreso)}%
      </Typography>
    </Box>
  );
 })}
 </Box>
 );
}

export default ProgressBar;
