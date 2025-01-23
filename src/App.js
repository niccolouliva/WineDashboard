import React, { useState, useEffect } from "react";
import "./App.css";

import { useSimulatorData } from "./components/Simulator.js";

import PerformanceColtivazione from "./components/cards/PerformanceColtivazione";
import MonitoraggioAmbientale from "./components/cards/MonitoraggioAmbientale";
import EfficienzaUtilizzoRisorse from "./components/cards/EfficienzaUtilizzoRisorse";
import AnalisiSostenibilita from "./components/cards/AnalisiSostenibilita";
import PerformanceFinanziaria from "./components/cards/PerformanceFinanziaria";
import AnalisiMercati from "./components/cards/AnalisiMercati";
import GestioneRischio from "./components/cards/GestioneRischio";

import Memoji from "./components/images/Memoji.webp";

function App() {
  const { data } = useSimulatorData();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "enabled";
  });
  const [showDescriptions, setShowDescriptions] = useState(false);
  const [showJSONdata, setShowJSONdata] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("dark-mode", newMode ? "enabled" : "disabled");
  };

  const toggleDescriptions = () => {
    setShowDescriptions(!showDescriptions);
    document.body.classList.toggle("show-descriptions", !showDescriptions);
  };

  const toggleJSONdata = () => {
    setShowJSONdata(!showJSONdata);
  };

  const copyToClipboard = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
        alert("Dati (Output JSON) copiati negli appunti!");
      }).catch(err => {
        alert("Errore durante la copia: " + err);
      });
    }
  };

  const downloadExcel = () => {
    fetch("http://localhost:8000/download-excel")
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Errore durante il download del file Excel");
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Dati_Simulati.xlsx";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const formatJSON = (jsonData) => {
    const jsonString = JSON.stringify(jsonData, null, 2);

    const formattedJSON = jsonString
      .replace(/("[a-zA-Z0-9_]+")/g, '<span style="color: #ff2c78;">$1</span>')
      .replace(/(:\s".*?")/g, '<span style="color: #f3e880;">$1</span>')
      .replace(/(:\s[0-9]+(\.[0-9]+)?)/g, '<span style="color: #ae81ff;">$1</span>')
      .replace(/([{}[\],])/g, '<span style="color: #ffffff;">$1</span>');
    return formattedJSON;
  };
  
  return (
    <div>
      <header>
        <div className="logo">🍷</div>
        <div className="header-content">
          <div className="header-title">Wine Dashboard</div>
          <div className="header-description">Dashboard live sugli indici di prestazioni aziendali (KPI)</div>
          {data && data.timestamp && data.timestamp.updated && (<div className="header-timestamp">Ultimo aggiornamento: <b>{data.timestamp.updated}</b></div>)}
        </div>

        <div className="controls">
          <button onClick={downloadExcel} tabIndex="1">
            {downloadExcel ? "📥 Scarica Excel" : "📥 Scarica Excel"}
          </button>
          <button onClick={toggleJSONdata} tabIndex="2">
            {showJSONdata ? "❌ Nascondi JSON" : "⚙️ Mostra JSON"}
          </button>
          <button onClick={toggleDescriptions} tabIndex="3">
            {showDescriptions ? "❌ Nascondi Descrizioni" : "📝 Mostra Descrizioni"}
          </button>
          <button onClick={toggleDarkMode} tabIndex="4">
            {darkMode ? "💡 Modalità Chiara" : "🌙 Modalità Scura"}
          </button>
        </div>
      </header>

      {showJSONdata && (
        <div className="JSON_data" style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
          <button onClick={copyToClipboard} className="copy-button">📋 Copia</button>
          <pre dangerouslySetInnerHTML={{ __html: data ? formatJSON(data) : "Caricamento dati..." }}></pre>
        </div>
      )}

      <div className="dashboard-container">
        <PerformanceColtivazione />
        <MonitoraggioAmbientale />
        <EfficienzaUtilizzoRisorse />
        <AnalisiSostenibilita />
        <PerformanceFinanziaria />
        <AnalisiMercati />
        <GestioneRischio />
      </div>
      
      <div className="info-section">
        <div className="info-container">
          <div className="info-image">
            <img src={Memoji} alt="Memoji" />
          </div>
          <div className="info-text">
            <h2>Wine Dashboard</h2>
            <p><b>Project Work della Tesi di Laurea</b></p>
            <p>Autore: <b>Niccolò Uliva</b></p>
            <p>Matricola: <b>0312201901</b></p>
            <p>Università: <b>Pegaso</b></p>
            <p>Corso: <b>Informatica per le Aziende Digitali</b> (L-31)</p>
            <p>Anno Accademico: <b>2024/2025</b></p>
          </div>
        </div>
      </div>

      <footer>
        <b>&copy; 2024/2025 Wine Dashboard</b> • Project Work UniPegaso
        <p>Realizzato da <b>Niccolò Uliva</b> - Matricola <b>0312201901</b></p>
      </footer>
    </div>
  );
}

export default App;