import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function CurrentDate() {
  const [date, setDate] = useState(
    new Date().toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(
        new Date().toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Typography variant="h3">Today</Typography>
      <Typography variant="body1" paddingBottom={4}>
        {date}
      </Typography>
    </>
  );
}

export default CurrentDate;
