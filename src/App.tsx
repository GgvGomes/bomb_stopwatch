import { useEffect, useState } from "react";

import "./styles/app.scss";

function App() {
  const [timer, setTimer] = useState<number>(0);
  const [timerWaiting, setTimerWaiting] = useState(0);
  const [password, setPassword] = useState("");

  const [hour, setHour] = useState("00:00:00:00");
  const [isCronometroAtivo, setIsCronometroAtivo] = useState(false);

  const [type, setType] = useState("number");
  const [inputValue, setInputValue] = useState("");

  const input: any = document.getElementById("input_pass");

  function handleStartStop() {
    setIsCronometroAtivo((ativo) => !ativo);
  }

  useEffect(() => {
    let intervalId: number | undefined;
    if (isCronometroAtivo) {
      intervalId = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1);
    }

    if(timer == 0){
      setIsCronometroAtivo(false);
    }

    return () => clearInterval(intervalId);
  }, [isCronometroAtivo]);

  const [horas, minutos, segundos, milissegundos] = [
    timer / (1000 * 60 * 60),
    (timer / (1000 * 60)) % 60,
    (timer / 1000) % 60,
    timer % 1000,
  ].map((t) => Math.floor(t));

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
      setIsCronometroAtivo(true);

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
      setIsCronometroAtivo(false);
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

      <div className="stopwatch">
        {horas.toString().padStart(2, "0")}:{minutos.toString().padStart(2, "0")}:{segundos.toString().padStart(2, "0")}:
        {milissegundos.toString().padStart(3, "0").substring(0, 2)}
      </div>

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
