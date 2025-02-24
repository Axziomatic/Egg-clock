import { useEffect, useState } from "react";
import Button from "./Button";

export default function Main() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (hundredths: number) => {
    const totalSeconds = Math.floor(hundredths / 100); // Totala sekunder
    const mins = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0"); // Minuter
    const secs = (totalSeconds % 60).toString().padStart(2, "0"); // Sekunder
    const hundredthPart = (hundredths % 100).toString().padStart(2, "0"); // Hundradelar
    return `${mins}:${secs}:${hundredthPart}`;
  };

  return (
    <main className="bg-slate-700">
      <div className="flex flex-col bg-slate-900 mx-6 px-6 py-4">
        <div className="flex justify-between">
          <Button label="Soft Boiled" />
          <Button label="Medium Boiled" />
          <Button label="Hard Boiled" />
        </div>
        <div className="text-center text-white text-4xl font-bold">
          {formatTime(time)}
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="py-2 px-4 bg-green-500 rounded hover:bg-green-600"
            onClick={() => setIsRunning(true)}
          >
            Start
          </button>
          <button
            className="py-2 px-4 bg-red-500 rounded hover:bg-red-600"
            onClick={() => setIsRunning(false)}
          >
            Stop
          </button>
          <button
            className="py-2 px-4 bg-yellow-500 rounded hover:bg-yellow-600"
            onClick={() => {
              setIsRunning(false);
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
