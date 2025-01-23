import React, { useState, useEffect } from "react";

export const useSimulatorData = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/real-time-data");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error("Errore nel caricamento dei dati:", err);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return { data };
};

const Simulator = () => {
  const { data } = useSimulatorData();

  return (
    <div>
      <pre>{data !== null ? JSON.stringify(data, null, 2) : "Caricamento o errore nei dati..."}</pre>
    </div>
  );
};

export default Simulator;