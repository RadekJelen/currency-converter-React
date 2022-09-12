import Result from "./Result";
import Clock from "./Clock";
import { useState } from "react";
import { StyledForm, StyledLabel, StyledSpan, StyledInput, StyledButton, StyledParagraf } from "./styled"

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
      <StyledForm onSubmit={onFormSubmit}>
        <Clock />
        <StyledLabel>
          <StyledSpan>Mam*:</StyledSpan>
          <StyledInput
            type="number"
            step="0.01"
            min="1"
            value={amount}
            onChange={({ target }) => setAount(target.value)}
            placeholder="wpisz kwotę w PLN"
            required
            autoFocus
          />
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>Waluty:</StyledSpan>
          <StyledInput 
            as="select"
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
          </StyledInput>
        </StyledLabel>
        <StyledButton>Przelicz!</StyledButton>
        <Result result={result} />
        <StyledParagraf>
          * - pole wymagane.<br />
          Kursy pochodzą ze strony Narodowego Banku Polskiego (Tabela z dnia 2022-06-27).
        </StyledParagraf>
      </StyledForm>
  );
};

export default Form;