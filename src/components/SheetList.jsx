import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import sheetBestService from "../services/sheetBestService";

function SheetList() {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    const fetchSheets = async () => {
      const data = await sheetBestService.getSheets();
      setSheets(data);
    };

    fetchSheets();
  }, []);

  return (
    <Grid container spacing={1}>
      {sheets.map((sheet, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Link to={`/corte/${sheet.Corte}`}>
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="div">
                  {sheet.Corte}
                </Typography>
                <Typography variant="body1" component="div">
                  {sheet.Coach}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default SheetList;
