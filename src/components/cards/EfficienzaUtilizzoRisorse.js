import React from "react";
import { Pie } from "react-chartjs-2";
import KpiCard from "../KpiCard";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { useSimulatorData } from "../Simulator.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const EfficienzaUtilizzoRisorse = () => {
  const { data: simulatorData } = useSimulatorData();

  const chartData = {
    labels: [
      "Consumo Idrico",
      "Consumo Fertilizzanti",
      "Efficienza Acqua",
      "Consumo Energetico",
      "Spreco",
    ],
    datasets: [
      {
        label: "Distribuzione Risorse",
        data: simulatorData
          ? [
              simulatorData.efficienza_risorse.consumo_idrico,
              simulatorData.efficienza_risorse.consumo_fertilizzanti,
              simulatorData.efficienza_risorse.efficienza_acqua,
              simulatorData.efficienza_risorse.consumo_energetico,
              simulatorData.efficienza_risorse.percentuale_spreco,
            ]
          : [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="group-container" tabIndex="30">
      <div className="group-title">EFFICIENZA UTILIZZO RISORSE</div>
      <div className="group-description">Monitora i parametri relativi all'efficienza delle risorse per garantire la sostenibilità.</div>

      <KpiCard
        title="CONSUMO IDRICO"
        value={simulatorData?.efficienza_risorse.consumo_idrico}
        unit="m³/ha"
        range="900 - 1200"
        description="Quantità d'acqua utilizzata per ettaro coltivato, cruciale per la sostenibilità"
      />

      <KpiCard
        title="CONSUMO DI FERTILIZZANTI"
        value={simulatorData?.efficienza_risorse.consumo_fertilizzanti}
        unit="kg/ha"
        range="70 - 90"
        description="Quantità di fertilizzanti applicati per ettaro per garantire la crescita delle colture"
      />

      <KpiCard
        title="EFFICIENZA NELL'USO DELL'ACQUA"
        value={simulatorData?.efficienza_risorse.efficienza_acqua}
        unit="%"
        range="65 - 80"
        description="Percentuale di acqua effettivamente utilizzata dalle colture rispetto a quella totale fornita"
      />

      <KpiCard
        title="CONSUMO ENERGETICO"
        value={simulatorData?.efficienza_risorse.consumo_energetico}
        unit="kWh/ha"
        range="200 - 300"
        description="Quantità di energia elettrica o combustibile utilizzata per ettaro"
      />

      <KpiCard
        title="PERCENTUALE DI SPRECO"
        value={simulatorData?.efficienza_risorse.percentuale_spreco}
        unit="%"
        range="3 - 7"
        description="Quantità di risorse non utilizzate in modo ottimale o sprecate"
      />

      <div className="chart-container">
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  color: document.body.classList.contains("dark-mode") ? "white" : "black",
                },
              },
              title: {
                display: false,
                text: "Efficienza nell'Uso delle Risorse",
                color: document.body.classList.contains("dark-mode") ? "white" : "black",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default EfficienzaUtilizzoRisorse;