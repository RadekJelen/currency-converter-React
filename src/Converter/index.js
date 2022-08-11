import "./style.css"
import Button from "../Button";
import Result from "../Result";

const Converter = () => (
  <main className="converter">
    <form>
      <p>
        <label>
          <span className="converter__labelText">Mam*:</span>
          <input className="converter__field" type="number" step="0.01" min="1"
            placeholder="wpisz kwotę w PLN" required autoFocus />
        </label>
      </p>
      <p>
        <label>
          <span className="converter__labelText">Waluty:</span>
          <select className="converter__field">
            <option value="EUR">Euro (EURO)</option>
            <option value="USD">Dolar amerykński (USD)</option>
            <option value="GBP">Funt (GBP)</option>
          </select>
        </label>
      </p>
      <Button />
      <Result />
    </form>
  </main>
);

export default Converter