import { useState } from "react";

import { Input } from "./components/input";
import { Stopwatch } from "./components/stopwatch";

import "./styles/app.scss";

function App() {
  const [timer, setTimer] = useState(0);
  const [timerWaiting, setTimerWaiting] = useState(0);
  const [password, setPassword] = useState("");

  const [type, setType] = useState("number");
  const [inputValue, setInputValue] = useState("");

  const input: any = document.getElementById("input_pass");

  const HandleSetTime = () => {
    if (inputValue) {
      if (!Number(inputValue)) {
        alert("Please insert only numbers");
        return;
      }

      setTimerWaiting(Number(inputValue));
      setType("text");
      setInputValue('');
      if (input) input.value = "";
    } else {
      alert("Please insert a number");
    }
  };
  
  const HandleSetPassword = () => {
    if (inputValue) {
      setTimer(timerWaiting);
      setPassword(inputValue);
      setType("password");

      if (input) input.value = "";
    } else {
      alert("Please insert a password");
    }
  };

  const HandleConfirmPassword = () => {
    if (inputValue === password) {
      alert("Password Confirmed");
    } else {
      alert("Password Incorrect");
    }

    if (input) input.value = "";
  };

  const VerifButtons = () => {
    if (!timerWaiting)
      return (
        <button onClick={HandleSetTime}>Set a Timer in Milliseconds</button>
      );

    if (!password)
      return <button onClick={HandleSetPassword}>Set a Password</button>;

    return <button onClick={HandleConfirmPassword}>Confirm Password</button>;
  };

  return (
    <div className="App">
      <Stopwatch timer={timer}/>
      <input
        className="input_insert"
        id="input_pass"
        onChange={(e: any) => setInputValue(e.target.value)}
        onKeyDown={(e: any) => setInputValue(e.target.value)}
        type={type}
      />

      {VerifButtons()}
    </div>
  );
}

export default App;
