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

const PerformanceFinanziaria = () => {
  const { data: simulatorData } = useSimulatorData();

  const chartData = {
    labels: ["Entrate Totali", "Costi Operativi"],
    datasets: [
      {
        label: "Performance Finanziaria",
        data: simulatorData
          ? [
              simulatorData.performance_finanziaria.entrate_totali,
              simulatorData.performance_finanziaria.costi_operativi,
            ]
          : [],
        backgroundColor: ["#4CAF50", "#F44336"],
        borderColor: ["#388E3C", "#D32F2F"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="group-container" tabIndex="50">
      <div className="group-title">PERFORMANCE FINANZIARIA</div>
      <div className="group-description">Analizza gli aspetti economici della produzione e delle vendite.</div>

      <KpiCard
        title="ENTRATE TOTALI"
        value={simulatorData?.performance_finanziaria.entrate_totali}
        unit="€"
        range="1000000 - 2000000"
        description="Ricavi generati dalla vendita del raccolto e di altri prodotti"
      />
      
      <KpiCard
        title="COSTI OPERATIVI"
        value={simulatorData?.performance_finanziaria.costi_operativi}
        unit="€"
        range="700000 - 900000"
        description="Spese sostenute per la produzione, lavorazione e distribuzione"
      />

      <KpiCard
        title="MARGINE DI PROFITTO NETTO"
        value={simulatorData?.performance_finanziaria.margine_profitto}
        unit="%"
        range="20 - 30"
        description="Percentuale del profitto rispetto ai ricavi totali"
      />

      <KpiCard
        title="COSTO PER TONNELLATA"
        value={simulatorData?.performance_finanziaria.costo_tonnellata}
        unit="€/ton"
        range="90 - 110"
        description="Spesa media sostenuta per produrre una tonnellata di raccolto"
      />

      <KpiCard
        title="ROI (Ritorno sull'investimento)"
        value={simulatorData?.performance_finanziaria.roi}
        unit="%"
        range="25 - 35"
        description="Rendimento generato rispetto agli investimenti effettuati"
      />

      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
                text: "Entrate Totali vs Costi Operativi",
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
          height={340}
        />
      </div>
    </div>
  );
};

export default PerformanceFinanziaria;