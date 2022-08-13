import "./style.css"
import Button from "../Button";
import Result from "../Result";
import { useState } from "react";

const Converter = () => {
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
    <main className="converter">
      <form onSubmit={onFormSubmit}>
        <label className="converter__label">
          <span className="converter__labelText">Mam*:</span>
          <input className="converter__field"
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
        <label className="converter__label">
          <span className="converter__labelText">Waluty:</span>
          <select className="converter__field"
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
        <Button />
        <Result result={result} />
      </form>
    </main>
  );
};

export default Converter