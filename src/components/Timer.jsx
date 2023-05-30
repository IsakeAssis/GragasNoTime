import React, { useState, useRef, useEffect } from "react";
import "./crono.css";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setTimer(0);
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="App">
      <h1>Cronômetro</h1>
      <div className="timer">{formatTime(timer)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={startTimer}>Iniciar</button>
        ) : (
          <button onClick={stopTimer}>Parar</button>
        )}
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Timer;
