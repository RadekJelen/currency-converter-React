import "./style.css";
import Result from "./Result";
import Clock from "./Clock";
import { useState } from "react";

const Form = () => {
  const currencies = [
    { short: "EUR", name: "Euro", rate: 4.6965, },
    { short: "USD", name: "Dolar Amerykański", rate: 4.4369, },
    { short: "GBP", name: "Funt Brytyjski", rate: 5.4655, }
  ];

  const [amount, setAount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
      <form className="form" onSubmit={onFormSubmit}>
        <Clock />
        <label className="form__label">
          <span className="form__labelText">Mam*:</span>
          <input className="form__field"
            type="number"
            step="0.01"
            min="1"
            value={amount}
            onChange={({ target }) => setAount(target.value)}
            placeholder="wpisz kwotę w PLN"
            required
            autoFocus
          />
        </label>
        <label className="form__label">
          <span className="form__labelText">Waluty:</span>
          <select className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map(currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            ))}
          </select>
        </label>
        <button className="form__button">Przelicz!</button>
        <Result result={result} />
        <p className="form__textInfo">
          * - pole wymagane.<br />
          Kursy pochodzą ze strony Narodowego Banku Polskiego (Tabela z dnia 2022-06-27).
        </p>
      </form>
  );
};

export default Form;