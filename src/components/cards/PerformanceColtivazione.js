import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import KpiCard from "../KpiCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useSimulatorData } from "../Simulator.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceColtivazione = () => {
  const { data: simulatorData } = useSimulatorData();

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Produzione Totale",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  });

  useEffect(() => {
    if (simulatorData) {
      const newProduzioneTotale = simulatorData.performance_coltivazione.produzione_totale;

      setChartData((prevChartData) => {
        const updatedLabels = [
          ...prevChartData.labels,
          new Date().toLocaleTimeString(),
        ];

        const updatedData = [
          ...prevChartData.datasets[0].data,
          newProduzioneTotale,
        ];

        // Mantiene solo gli ultimi 20 dati
        const trimmedLabels = updatedLabels.slice(-20);
        const trimmedData = updatedData.slice(-20);

        return {
          labels: trimmedLabels,
          datasets: [
            {
              ...prevChartData.datasets[0],
              data: trimmedData,
            },
          ],
        };
      });
    }
  }, [simulatorData]);

  return (
    <div className="group-container" tabIndex="10">
      <div className="group-title">PERFORMANCE DELLA COLTIVAZIONE</div>
      <div className="group-description">Questa sezione analizza i dati relativi alla produttività delle colture, fornendo una panoramica sull'efficienza agricola.</div>
      
      <KpiCard
        title="PRODUZIONE TOTALE"
        value={simulatorData?.performance_coltivazione.produzione_totale}
        unit="tonnellate"
        range="800 - 1500"
        description="Produzione complessiva della coltura"
      />

      <KpiCard
        title="RENDIMENTO PER ETTARO"
        value={simulatorData?.performance_coltivazione.rendimento_ettaro}
        unit="ton/ha"
        range="5 - 8"
        description="Misura della produttività media per ettaro coltivato"
      />

      <KpiCard
        title="PERCENTUALE DI RESA AGRICOLA"
        value={simulatorData?.performance_coltivazione.resa_agricola}
        unit="%"
        range="75 - 90"
        description="Rapporto tra produzione effettiva e potenziale massimo ottenibile"
      />

      <KpiCard
        title="SUPERFICIE COLTIVATA"
        value={simulatorData?.performance_coltivazione.superficie_coltivata}
        unit="ha"
        range="180 - 220"
        description="Area totale dedicata alla coltivazione"
      />

      <KpiCard
        title="INDICE DI QUALITÀ DELLE COLTURE"
        value={simulatorData?.performance_coltivazione.indice_qualita}
        range="80 - 100"
        description="Valutazione complessiva della qualità del raccolto"
      />

      <div className="chart-container">
        <Line
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
                text: "Produzione Totale in Tempo Reale",
                color: document.body.classList.contains("dark-mode") ? "white" : "black",
              },
            },
            scales: {
              x: {
                ticks: {
                  color: document.body.classList.contains("dark-mode") ? "white" : "black",
                },
                grid: {
                  color: document.body.classList.contains("dark-mode") ? "rgba(255,255,255,0.2)" : "rgba(32, 32, 32, 0.25)",
                },
              },
              y: {
                ticks: {
                  color: document.body.classList.contains("dark-mode") ? "white" : "black",
                },
                grid: {
                  color: document.body.classList.contains("dark-mode") ? "rgba(255,255,255,0.2)" : "rgba(32, 32, 32, 0.25)",
                },
              },
            },
          }}
          height={250}
        />
      </div>
    </div>
  );
};

export default PerformanceColtivazione;