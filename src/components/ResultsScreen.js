import Results from "./Results.js";
import "../styles/ResultsScreen.css";

export default function ResultsScreen({
  bill,
  tipPercentage,
  numberOfPeople,
  invalidBill,
  invalidTipPercentage,
  invalidNumberOfPeople,
  resetUserInput,
}) {
  let ableToCalculate = false;

  if (!invalidBill && !invalidTipPercentage && !invalidNumberOfPeople) {
    ableToCalculate = true;
  }

  if (bill === "0" || numberOfPeople === "0") {
    ableToCalculate = false;
  }

  let tipAmountPerPerson;
  let totalAmountPerPerson;

  if (ableToCalculate) {
    const tipMultiplier = 1 + +tipPercentage;
    const totalAmount = +bill * tipMultiplier;
    const tipAmount = totalAmount - +bill;

    tipAmountPerPerson = (tipAmount / +numberOfPeople).toFixed(2);
    totalAmountPerPerson = (totalAmount / +numberOfPeople).toFixed(2);
  } else {
    tipAmountPerPerson = "0.00";
    totalAmountPerPerson = "0.00";
  }

  return (
    <div className="results-screen">
      <Results dividend={"Tip Amount"} result={tipAmountPerPerson} />
      <Results dividend={"Total"} result={totalAmountPerPerson} />
      <button
        className="results-screen__button"
        type="button"
        onClick={resetUserInput}
      >
        Reset
      </button>
    </div>
  );
}
