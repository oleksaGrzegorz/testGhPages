const CurrencyConverter = () => {


  return (
    <div>
      <h1>Przelicznik walut</h1>
      <form>
        <label>
          kwota w zl:
          <input />
        </label>
        <p>
          <label>
            waluta:
            <select>
              <option>eur</option>
              <option>usd</option>
            </select>
          </label>
        </p>

        <button>przelicz</button>
      </form> 

      
    </div>
  );
};

export default CurrencyConverter;
