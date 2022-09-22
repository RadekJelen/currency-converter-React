import Result from "./Result";
import Clock from "./Clock";
import { useState } from "react";
import { useRatesData } from "./useRatesData";
import { StyledForm, StyledLabel, StyledSpan, StyledInput, StyledButton, StyledParagraf, StyledLoader, StyledLoaderDiv, StyledErrorImage, StyledLoaderSpan } from "./styled";
import warning from "./warning-sign.png";

const Form = () => {
  const ratesData = useRatesData();
  const [result, setResult] = useState();
  const [amount, setAount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Clock />
      {ratesData.state === "loading" && (
        <StyledLoaderDiv>
          <StyledLoaderSpan>Trwa pobieranie danych... może to potrwać kilka sekund</StyledLoaderSpan>
          <StyledLoader />
        </StyledLoaderDiv>
      )}

      {ratesData.state === "error" && (
        <StyledLoaderDiv>
          <StyledLoaderSpan converted>Coś poszło nie tak... spróbuj ponownie za chwilę</StyledLoaderSpan>
          <StyledErrorImage src={warning} />
        </StyledLoaderDiv>
      )}
      
      {ratesData.state === "success" && (
        <>
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
              {Object.keys(ratesData.rates).map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </StyledInput>
          </StyledLabel>
          <StyledButton>Przelicz!</StyledButton>
          <Result result={result} />
          <StyledParagraf>
            * - pole wymagane.<br />
            Kursy walut pochodzą z Europejskiego Banku Centralnego.<br />
            Aktualne na dzień <strong>{ratesData.date}</strong>
          </StyledParagraf>
        </>
      )}
    </StyledForm>
  );
};

export default Form;