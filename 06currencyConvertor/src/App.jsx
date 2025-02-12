import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from,setFrom]= useState("usd");
  const [to,setTo]= useState("pkr");
  const [convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options =Object.keys(currencyInfo)

  const swap= ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount)
  }

  const convert=()=>{
    setConvertedAmount(amount* currencyInfo[to])
  }


  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/012/742/301/non_2x/abstract-finance-currency-money-exchange-moving-or-playing-lucky-draw-games-digital-finance-gold-coin-concept-currency-on-a-modern-background-golden-glow-vector.jpg")`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                label="From" amount={amount} onAmountChange={setAmount} currency={from} onCurrencyChange={setFrom} currencyOptions={options}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                label="To" 
                amount={convertedAmount} onAmountChange={setConvertedAmount} currency={to} onCurrencyChange={setTo} amountDisabled={true} currencyOptions={options}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convert}
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
