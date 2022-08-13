import "./style.css"

const Result = ({ result }) => (
  <>
    <p className="result">
      {result && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
        </>
      )}
    </p>
    <p className="textInfo">
      * - pole wymagane.<br />
      Kursy pochodzą ze strony Narodowego Banku Polskiego (Tabela z dnia 2022-06-27).
    </p>
  </>
);

export default Result