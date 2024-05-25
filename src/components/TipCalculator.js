import { useState } from "react";
import InputSection from "./InputSection.js";
import ResultsScreen from "./ResultsScreen.js";
import "../styles/TipCalculator.css";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState("");

  function changeBill(e) {
    setBill(e.currentTarget.value);
  }

  function changeTipPercentage(e) {
    if (e.type === "click") {
      setTipPercentage(e.currentTarget.dataset.percentage);
    } else {
      setTipPercentage(e.currentTarget.value);
    }
  }

  function changeNumberOfPeople(e) {
    setNumberOfPeople(e.currentTarget.value);
  }

  function resetUserInput() {
    setBill("");
    setTipPercentage(0);
    setNumberOfPeople("");
  }

  const validFloatChars = "0123456789.";
  let billDecimalCount = 0;
  let invalidBill = false;

  if (bill && bill !== ".") {
    for (let i = 0; i < bill.length; i++) {
      for (let j = 0; j < validFloatChars.length; j++) {
        if (bill[i] === validFloatChars[j]) {
          if (bill[i] === ".") {
            invalidBill = false;
            billDecimalCount++;
            // No need to break out of the loop because '.' is the last character that's being tested for
          } else {
            invalidBill = false;
            break;
          }
        } else {
          invalidBill = true;
        }

        if (billDecimalCount > 1) {
          invalidBill = true;
        }
      }

      if (invalidBill) {
        break;
      }
    }
  } else {
    invalidBill = true;
  }

  let tipPercentageDecimalCount = 0;
  let invalidTipPercentage = false;

  if (tipPercentage && tipPercentage !== ".") {
    for (let i = 0; i < tipPercentage.length; i++) {
      for (let j = 0; j < validFloatChars.length; j++) {
        if (tipPercentage[i] === validFloatChars[j]) {
          if (tipPercentage[i] === ".") {
            invalidTipPercentage = false;
            tipPercentageDecimalCount++;
          } else {
            invalidTipPercentage = false;
            break;
          }
        } else {
          invalidTipPercentage = true;
        }

        if (tipPercentageDecimalCount > 1) {
          invalidTipPercentage = true;
        }
      }

      if (invalidTipPercentage) {
        break;
      }
    }
  } else {
    invalidTipPercentage = true;
  }

  const validNumChars = "0123456789";
  let invalidNumberOfPeople = false;

  if (numberOfPeople) {
    for (let i = 0; i < numberOfPeople.length; i++) {
      for (let j = 0; j < validNumChars.length; j++) {
        if (numberOfPeople[i] === validNumChars[j]) {
          invalidNumberOfPeople = false;
          break;
        } else {
          invalidNumberOfPeople = true;
        }
      }

      if (invalidNumberOfPeople) {
        break;
      }
    }
  } else {
    invalidNumberOfPeople = true;
  }

  return (
    <div className="tip-calculator">
      <InputSection
        bill={bill}
        tipPercentage={tipPercentage}
        numberOfPeople={numberOfPeople}
        invalidBill={invalidBill}
        invalidTipPercentage={invalidTipPercentage}
        invalidNumberOfPeople={invalidNumberOfPeople}
        changeBill={changeBill}
        changeTipPercentage={changeTipPercentage}
        changeNumberOfPeople={changeNumberOfPeople}
      />
      <ResultsScreen
        bill={bill}
        tipPercentage={tipPercentage}
        numberOfPeople={numberOfPeople}
        invalidBill={invalidBill}
        invalidTipPercentage={invalidTipPercentage}
        invalidNumberOfPeople={invalidNumberOfPeople}
        resetUserInput={resetUserInput}
      />
    </div>
  );
}
