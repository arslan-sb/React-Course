import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  //useRef 
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) str += "0123456789";
    if (symbols) str += "!@#$%^&*()-_=+[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      const rand = Math.floor(Math.random() * str.length);
      console.log(rand);
      pass += str.charAt(rand);
    }

    setPassword(pass);
  }, [length, numbers, symbols, setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [numbers, symbols, length, passwordGenerator]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-screen bg-gray-400 text-white">
        <div className=" bg-gray-700 p-10 rounded-4xl">
          <h1 className=" text-lg text-white text-center">
            Password Generator
          </h1>
          <div className="flex w-full justify-between bg-white rounded-2xl overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="Password "
              className="p-4 outline-none w-full text-gray-700  "
              readOnly
              ref={passwordRef}
            />
            <button className="bg-blue-600 p-4 rounded-2xl hover:bg-orange-300 "
            onClick={copyPasswordToClipboard}
            >Copy</button>
          </div>
          <div className="flex text-sm gap-x-2 text-orange-400">
            <div className="flex items-center  ">
              <input
                type="range"
                className="cursor-pointer "
                value={length}
                min={8}
                max={100}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                name="Numbers"
                defaultChecked={numbers}
                id="numberInput"
                onChange={() => {
                  setNumbers((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput"> Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                name="Symbols"
                defaultChecked={numbers}
                id="symbolsInput"
                onChange={() => {
                  setSymbols((prev) => !prev);
                }}
              />
              <label htmlFor="symbolsInput">Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
