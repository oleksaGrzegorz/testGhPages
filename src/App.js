const CurrencyConverter = () => {

  const liczba = document.getElementById("pole".value);
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

      <input id="pole"></input>
      <button onClick={if (liczba>0) ? document.getElementById("wynik").innerHTML ="dodatnia" : document.getElementById("wynik").innerHTML ="ujemna"}>sprawdz</button>
    </div>
  );
};

export default CurrencyConverter;
