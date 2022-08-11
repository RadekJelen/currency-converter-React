

function App() {
  return (
    <div>
      <header>
        <h1>Kalkulator walutowy</h1>
      </header>
      <main className="converter">
        <form className="js-converter">
          <p>
            <label>
              <span className="converter__labelText">Mam*:</span>
              <input className="js-amount converter__field" type="number" step="0.01" min="1"
                placeholder="wpisz kwotę w PLN" required autoFocus />
            </label>
          </p>
          <p>
            <label>
              <span className="converter__labelText">Waluty:</span>
              <select className="js-select converter__field">
                <option value="EUR">Euro (EURO)</option>
                <option value="USD">Dolar amerykński (USD)</option>
                <option value="GBP">Funt (GBP)</option>
              </select>
            </label>
          </p>
          <p>
            <button className="button">Przelicz!</button>
          </p>
          <p className="converter__textResult js-result"></p>
          <p className="converter__textInfo">
            * - pole wymagane.<br/>
              Kursy pochodzą ze strony Narodowego Banku Polskiego (Tabela z dnia 2022-06-27).
          </p>
        </form>
      </main>
      <footer>
        <p> To też sam zrobiłem, serio &#128516;</p>
      </footer>
    </div>
  );
}

export default App;
