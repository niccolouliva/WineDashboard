import React from "react";
import { Bar } from "react-chartjs-2";
import KpiCard from "../KpiCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useSimulatorData } from "../Simulator.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonitoraggioAmbientale = () => {
  const { data: simulatorData } = useSimulatorData();

  const chartData = {
    labels: [
      "Temperatura",
      "Umidità",
      "Precipitazioni",
      "Radiazione Solare",
      "Velocità Vento",
    ],
    datasets: [
      {
        label: "Valori Ambientali",
        data: simulatorData
          ? [
              simulatorData.monitoraggio_ambientale.temperatura_media,
              simulatorData.monitoraggio_ambientale.umidita_relativa,
              simulatorData.monitoraggio_ambientale.precipitazioni_mensili,
              simulatorData.monitoraggio_ambientale.radiazione_solare,
              simulatorData.monitoraggio_ambientale.velocita_vento,
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
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="group-container" tabIndex="20">
      <div className="group-title">MONITORAGGIO AMBIENTALE</div>
      <div className="group-description">Monitora i parametri ambientali cruciali per il successo delle colture.</div>

      <KpiCard
        title="TEMPERATURA MEDIA GIORNALIERA"
        value={simulatorData?.monitoraggio_ambientale.temperatura_media}
        unit="°C"
        range="20 - 30"
        description="Temperatura media registrata durante il giorno, influenzando la crescita delle colture"
      />

      <KpiCard
        title="UMIDITÀ RELATIVA"
        value={simulatorData?.monitoraggio_ambientale.umidita_relativa}
        unit="%"
        range="50 - 70"
        description="Percentuale di umidità presente nell'aria, essenziale per prevenire stress idrico"
      />

      <KpiCard
        title="PRECIPITAZIONI MENSILI"
        value={simulatorData?.monitoraggio_ambientale.precipitazioni_mensili}
        unit="mm"
        range="50 - 120"
        description="Quantità totale di pioggia caduta in un mese, utile per valutare l'irrigazione naturale"
      />

      <KpiCard
        title="RADIAZIONE SOLARE"
        value={simulatorData?.monitoraggio_ambientale.radiazione_solare}
        unit="W/m²"
        range="150 - 250"
        description="Intensità della luce solare, determinante per la fotosintesi"
      />

      <KpiCard
        title="VELOCITÀ DEL VENTO"
        value={simulatorData?.monitoraggio_ambientale.velocita_vento}
        unit="km/h"
        range="10 - 15"
        description="Vento medio giornaliero che può influenzare l'impollinazione e la stabilità delle colture"
      />

      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
                position: "bottom",
                labels: {
                  color: document.body.classList.contains("dark-mode") ? "white" : "black",
                },
              },
              title: {
                display: false,
                text: "Monitoraggio dei Parametri Ambientali",
                color: document.body.classList.contains("dark-mode") ? "white" : "black",
              },
            },
            scales: {
              x: {
                ticks: {
                  color: document.body.classList.contains("dark-mode") ? "white" : "black",
                },
                grid: {
                  color: document.body.classList.contains("dark-mode") ? "rgba(255,255,255,0)" : "rgba(32, 32, 32, 0)",
                },
              },
              y: {
                ticks: {
                  color: document.body.classList.contains("dark-mode") ? "white" : "black",
                },
                grid: {
                  color: document.body.classList.contains("dark-mode") ? "rgba(255,255,255,0.35)" : "rgba(32, 32, 32, 0.35)",
                },
              },
            },
          }}
          height={290}
        />
      </div>
    </div>
  );
};

export default MonitoraggioAmbientale;