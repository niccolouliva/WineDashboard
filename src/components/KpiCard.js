import React, {useState} from "react";
import "./KpiCard.css";

const KpiCard = ({ title, value, unit, range, description }) => {
  const [min, max] = range.split("-").map(Number);
  const [shouldShowDescription, setShouldShowDescription] = useState(false)

  const toggleShowDescriptions = () => {
    setShouldShowDescription(!shouldShowDescription)
  }

  let statusColor = "gray";

  if (value === null || isNaN(value)) {
    statusColor = "";
  } else {
    const rangeDiff = max - min;
    const lower20 = min + rangeDiff * 0.2;
    const upper20 = max - rangeDiff * 0.2;

    if (value >= lower20 && value <= upper20) {
      statusColor = "green";
    } else if ((value > min && value <= lower20) || (value >= upper20 && value < max)) {
      statusColor = "orange";
    } else if (value <= min || value >= max) {
      statusColor = "red";
    }
  }

  const separatedDigits = (value) => {
    if (!value) return "0";
    const number = parseFloat(String(value).replace(",", "."));
    return number.toLocaleString("it-IT");
  };
  
  const withCommas = (num) => {
    if (!!parseInt(num)) {
      let reversed = String(num).split("").reverse().join("");
      return reversed.match(/.{1,3}/g).join(".").split("").reverse().join("");
    }
    return num;
  };

  const splitRange = (rangeString) => {
    const [low, high] = rangeString.replace(/\s/g, "").split("-");
    return { lowerBound: withCommas(low), upperBound: withCommas(high) };
  };

  return (
    <div className="kpi-card" onClick={() => toggleShowDescriptions()}>
      <div className="kpi-status" style={{ backgroundColor: statusColor }}></div>
      <div className={`kpi-fixed-content ${shouldShowDescription ? "show-descriptions" : ""}`}>
        <div className="kpi-title">{title}</div>
        <div className="kpi-description">{description}</div>
        <div className="kpi-value">{!!value ? separatedDigits(value) : "❌"}</div>
        <div className="kpi-unit">{unit}</div>
        <div className="kpi-range">{splitRange(range).lowerBound + " - " + splitRange(range).upperBound}</div>
      </div>
    </div>
  );
};

export default KpiCard;