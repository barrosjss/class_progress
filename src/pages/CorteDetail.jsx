import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sheetBestService from "../services/sheetBestService";

function CorteDetail() {
  const { corte } = useParams();
  const [corteDetail, setCorteDetail] = useState(null);

  useEffect(() => {
    const fetchCorteDetail = async () => {
      const data = await sheetBestService.getSheets();
      const corteData = data.find((sheet) => sheet.Corte === corte);
      setCorteDetail(corteData);
    };

    fetchCorteDetail();
  }, [corte]);

  if (!corteDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{corteDetail.Corte}</h1>
      <p>{corteDetail.Coach}</p>
      <p>{corteDetail["Fecha Inicio"]}</p>
      <p>{corteDetail["Fecha Finalizacion"]}</p>
    </div>
  );
}

export default CorteDetail;
