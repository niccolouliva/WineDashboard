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

const AnalisiMercati = () => {
  const { data: simulatorData } = useSimulatorData();

  // Stato locale per accumulare lo storico
  const [chartHistory, setChartHistory] = useState({
    labels: [],
    venditeTotali: [],    // Storico vendite_totali
    domandaStimata: [],   // Storico domanda_stimata
  });

  useEffect(() => {
    if (simulatorData) {
      const timestamp = new Date().toLocaleTimeString();

      setChartHistory((prevState) => {
        // Aggiungi nuovi dati mantenendo al massimo gli ultimi 20 valori
        const newLabels = [...prevState.labels, timestamp].slice(-20);
        const newVenditeTotali = [
          ...prevState.venditeTotali,
          simulatorData.analisi_mercati.vendite_totali,
        ].slice(-20);
        const newDomandaStimata = [
          ...prevState.domandaStimata,
          simulatorData.analisi_mercati.domanda_stimata,
        ].slice(-20);

        return {
          labels: newLabels,
          venditeTotali: newVenditeTotali,
          domandaStimata: newDomandaStimata,
        };
      });
    }
  }, [simulatorData]);

  const chartData = {
    labels: chartHistory.labels,
    datasets: [
      {
        label: "Vendite Totali",
        data: chartHistory.venditeTotali,
        borderColor: "#00A36C",
        backgroundColor: "rgba(0, 163, 108, 0.2)",
        tension: 0.3,
      },
      {
        label: "Domanda Stimata",
        data: chartHistory.domandaStimata,
        borderColor: "#0096FF",
        backgroundColor: "rgba(0, 150, 255, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="group-container" tabIndex="60">
      <div className="group-title">ANALISI DEI MERCATI</div>
      <div className="group-description">Studia le tendenze di vendita e la domanda dei prodotti.</div>

      <KpiCard
        title="VENDITE TOTALI"
        value={simulatorData?.analisi_mercati.vendite_totali}
        unit="unità"
        range="10.000 - 15.000"
        description="Quantità totale di prodotti venduti durante un determinato periodo"
      />

      <KpiCard
        title="QUOTA DI MERCATO REGIONALE"
        value={simulatorData?.analisi_mercati.quota_mercato}
        unit="%"
        range="35 - 50"
        description="Percentuale di vendite dell'azienda rispetto al mercato regionale totale"
      />

      <KpiCard
        title="PREZZO MEDIO DI VENDITA"
        value={simulatorData?.analisi_mercati.prezzo_vendita}
        unit="€/unità"
        range="45 - 55"
        description="Prezzo medio al quale il prodotto viene venduto"
      />

      <KpiCard
        title="DOMANDA STIMATA"
        value={simulatorData?.analisi_mercati.domanda_stimata}
        unit="unità"
        range="12.000 - 18.000"
        description="Numero di unità di prodotto richieste dal mercato"
      />

      <KpiCard
        title="FEEDBACK CLIENTI"
        value={simulatorData?.analisi_mercati.feedback_clienti}
        unit="/5"
        range="1 - 5"
        description="Punteggio medio di soddisfazione dei clienti basato su recensioni o sondaggi"
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
                text: "Vendite Totali e Domanda Stimata",
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
          height={400}
          width={500}
        />
      </div>
    </div>
  );
};

export default AnalisiMercati;