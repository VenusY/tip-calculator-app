import Input from "./Input.js";
import "../styles/InputSection.css";

export default function InputSection({
  bill,
  tipPercentage,
  numberOfPeople,
  invalidBill,
  invalidTipPercentage,
  invalidNumberOfPeople,
  changeBill,
  changeTipPercentage,
  changeNumberOfPeople,
}) {
  let billIsZero = false;

  if (!invalidBill) {
    if (+bill === 0) {
      billIsZero = true;
    }
  }

  let numberOfPeopleIsZero = false;

  if (!invalidNumberOfPeople) {
    if (+numberOfPeople === 0) {
      numberOfPeopleIsZero = true;
    }
  }

  return (
    <form className="input-section">
      <Input
        heading={"Bill"}
        image={"/images/icon-dollar.svg"}
        value={bill}
        onEvent={changeBill}
        invalid={invalidBill}
        isZero={billIsZero}
      />

      <div>
        <div className="tip-percentage__heading-container">
          <label
            className="input-section__heading tip-percentage__heading"
            htmlFor="tip-input"
          >
            Select Tip %
          </label>
          <p
            className={`input-section__error ${
              tipPercentage && invalidTipPercentage
                ? "input-section__error--visible"
                : ""
            }`}
          >
            Can't contain letters or symbols
          </p>
        </div>

        <div className="tip-percentage">
          <button
            className="tip-percentage__button"
            type="button"
            data-percentage={0.05}
            onClick={changeTipPercentage}
          >
            5%
          </button>
          <button
            className="tip-percentage__button"
            type="button"
            data-percentage={0.1}
            onClick={changeTipPercentage}
          >
            10%
          </button>
          <button
            className="tip-percentage__button"
            type="button"
            data-percentage={0.15}
            onClick={changeTipPercentage}
          >
            15%
          </button>
          <button
            className="tip-percentage__button"
            type="button"
            data-percentage={0.25}
            onClick={changeTipPercentage}
          >
            25%
          </button>
          <button
            className="tip-percentage__button"
            type="button"
            data-percentage={0.5}
            onClick={changeTipPercentage}
          >
            50%
          </button>
          <input
            className={`tip-percentage__input-field ${
              tipPercentage
                ? invalidTipPercentage
                  ? "input-section__input-field--invalid"
                  : "input-section__input-field--valid"
                : ""
            }`}
            id="tip-input"
            type="text"
            pattern="\d"
            placeholder="Custom"
            value={tipPercentage === 0 ? "" : tipPercentage}
            onChange={changeTipPercentage}
          />
        </div>
      </div>

      <Input
        heading={"Number of People"}
        image={"/images/icon-person.svg"}
        value={numberOfPeople}
        onEvent={changeNumberOfPeople}
        invalid={invalidNumberOfPeople}
        isZero={numberOfPeopleIsZero}
      />
    </form>
  );
}
