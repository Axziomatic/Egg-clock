import { useEffect } from "react";

interface TimerProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Timer({
  time,
  setTime,
  isRunning,
  setIsRunning,
}: TimerProps) {
  useEffect(() => {
    let timer: number;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 10);
    } else if (time <= 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time, setTime, setIsRunning]);

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
    <>
      <div className="text-center bg-yellow-50 text-4xl font-bold my-4 px-32 rounded">
        {formatTime(time)}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="py-2 px-4 bg-green-300 rounded border hover:bg-green-400"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="py-2 px-4 bg-red-300 rounded border hover:bg-red-400"
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="py-2 px-4 bg-yellow-200 rounded border hover:bg-yellow-300"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
