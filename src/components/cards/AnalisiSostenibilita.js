import React from "react";
import { PolarArea } from "react-chartjs-2";
import KpiCard from "../KpiCard";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { useSimulatorData } from "../Simulator.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const AnalisiSostenibilita = () => {
  const { data: simulatorData } = useSimulatorData();

  const chartData = {
    labels: [
      "Risorse Rinnovabili",
      "Emissioni CO₂",
      "Rifiuti Riciclati",
      "Indice Sostenibilità",
      "Certificazioni Ambientali",
    ],
    datasets: [
      {
        label: "Metriche di Sostenibilità",
        data: simulatorData
          ? [
              simulatorData.sostenibilita.risorse_rinnovabili,
              simulatorData.sostenibilita.emissioni_co2,
              simulatorData.sostenibilita.rifiuti_riciclati,
              simulatorData.sostenibilita.indice_sostenibilita,
              simulatorData.sostenibilita.certificazioni_ambientali,
            ]
          : [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
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
    <div className="group-container" tabIndex="40">
      <div className="group-title">ANALISI DELLA SOSTENIBILITÀ</div>
      <div className="group-description">Mostra metriche relative alla sostenibilità ambientale e sociale dell'azienda.</div>

      <KpiCard
        title="PERCENTUALE DI UTILIZZO DI RISORSE RINNOVABILI"
        value={simulatorData?.sostenibilita.risorse_rinnovabili}
        unit="%"
        range="50 - 70"
        description="Proporzione di energia e materiali provenienti da fonti sostenibili"
      />

      <KpiCard
        title="EMISSIONI DI CO₂"
        value={simulatorData?.sostenibilita.emissioni_co2}
        unit="kg/ton"
        range="100 - 150"
        description="Quantità di anidride carbonica rilasciata per ogni tonnellata di raccolto prodotto"
      />

      <KpiCard
        title="PERCENTUALE DI RIFIUTI RICICLATI"
        value={simulatorData?.sostenibilita.rifiuti_riciclati}
        unit="%"
        range="80 - 90"
        description="Percentuale di rifiuti agricoli reimpiegati o riciclati"
      />

      <KpiCard
        title="INDICE DI SOSTENIBILITÀ"
        value={simulatorData?.sostenibilita.indice_sostenibilita}
        range="80 - 100"
        description="Valutazione complessiva della sostenibilità operativa dell'azienda"
      />

      <KpiCard
        title="QUOTA DI CERTIFICAZIONI AMBIENTALI"
        value={simulatorData?.sostenibilita.certificazioni_ambientali}
        unit="%"
        range="90 - 100"
        description="Percentuale di processi aziendali certificati in conformità a standard ambientali"
      />

      <div className="chart-container">
        <PolarArea
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
                text: "Analisi della Sostenibilità",
                color: document.body.classList.contains("dark-mode") ? "white" : "black",
              },
            },
            scales: {
              r: {
                ticks: {
                  display: false,
                },
                grid: {
                  color: document.body.classList.contains("dark-mode") ? "rgba(255,255,255,0.2)" : "rgba(32, 32, 32, 0.35)",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default AnalisiSostenibilita;