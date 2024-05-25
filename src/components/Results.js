import "../styles/Results.css";

export default function Results({ dividend, result }) {
  return (
    <div className="results-section__container">
      <div className="results-section__sub-container">
        <p className="results-section__dividend">{dividend}</p>
        <p className="results-section__divisor">/ person</p>
      </div>
      <p className="results-section__result">
        {typeof number === "number" ? `$${result}` : result}
      </p>
    </div>
  );
}
