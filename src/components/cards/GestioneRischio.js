import React from "react";
import { Radar } from "react-chartjs-2";
import KpiCard from "../KpiCard";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { useSimulatorData } from "../Simulator.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const GestioneRischio = () => {
  const { data: simulatorData } = useSimulatorData();

  const chartData = {
    labels: [
      "Clima",
      "Perdita",
      "Scorte",
      "Assicurazione",
      "Produzione",
    ],
    datasets: [
      {
        label: "Rischio",
        data: simulatorData
          ? [
              simulatorData.gestione_rischio.vulnerabilita_climatica,
              simulatorData.gestione_rischio.perdite_post_raccolta,
              simulatorData.gestione_rischio.sicurezza_scorte,
              simulatorData.gestione_rischio.copertura_assicurativa,
              simulatorData.gestione_rischio.variazione_produzione_clima,
            ]
          : [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1.5)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="group-container" tabIndex="70">
      <div className="group-title">GESTIONE DEL RISCHIO</div>
      <div className="group-description">Questa sezione valuta i rischi operativi, ambientali e climatici per identificare potenziali vulnerabilità e migliorare la resilienza aziendale.</div>

      <KpiCard
        title="VULNERABILITÀ CLIMATICA"
        value={simulatorData?.gestione_rischio.vulnerabilita_climatica}
        range="1 - 10"
        description="Misura della sensibilità delle colture a eventi climatici estremi"
      />

      <KpiCard
        title="PERDITA POST-RACCOLTA"
        value={simulatorData?.gestione_rischio.perdite_post_raccolta}
        unit="%"
        range="5 - 12"
        description="Percentuale di prodotto perso durante lo stoccaggio e il trasporto"
      />

      <KpiCard
        title="SICUREZZA DELLE SCORTE"
        value={simulatorData?.gestione_rischio.sicurezza_scorte}
        unit="%"
        range="20 - 40"
        description="Livello di scorte mantenute per far fronte a interruzioni nella produzione"
      />

      <KpiCard
        title="COPERTURA ASSICURATIVA"
        value={simulatorData?.gestione_rischio.copertura_assicurativa}
        unit="%"
        range="70 - 90"
        description="Percentuale delle operazioni o colture assicurate contro rischi esterni"
      />

      <KpiCard
        title="PROBABILITÀ VARIAZIONE PRODUZIONE (CLIMATICA)"
        value={simulatorData?.gestione_rischio.variazione_produzione_clima}
        unit="%"
        range="10 - 20"
        description="Percentuale stimata di variazione della produzione dovuta a condizioni meteorologiche imprevedibili"
      />

      <div className="chart-container">
        <Radar
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
                text: "Radar dei Rischi Operativi e Ambientali",
                color: document.body.classList.contains("dark-mode") ? "white" : "black",
              },
            },
            scales: {
              r: {
                angleLines: {
                  color: document.body.classList.contains("dark-mode") ? "rgba(255,255,255,0.2)" : "rgba(32,32,32,0.2)",
                },
                grid: {
                  color: document.body.classList.contains("dark-mode") ? "rgba(255,255,255,0.2)" : "rgba(32,32,32,0.2)",
                },
                pointLabels: {
                  color: document.body.classList.contains("dark-mode") ? "white" : "black",
                },
                ticks: {
                  display: false,
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default GestioneRischio;