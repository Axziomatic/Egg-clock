import { useState } from "react";
import Button from "./Button";
import Timer from "./Timer";

export default function TimerContainer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const setTimer = (minutes: number) => {
    setTime(minutes * 60 * 100);
    setIsRunning(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-900 mx-6 px-6 py-4 h-75">
        <div className="flex justify-between">
          <Button label="Soft Boiled" onClick={() => setTimer(5)} />
          <Button label="Medium Boiled" onClick={() => setTimer(7)} />
          <Button label="Hard Boiled" onClick={() => setTimer(10)} />
        </div>

        <Timer
          time={time}
          setTime={setTime}
          isRunning={isRunning}
          setIsRunning={setIsRunning}
        />
      </div>
    </>
  );
}
