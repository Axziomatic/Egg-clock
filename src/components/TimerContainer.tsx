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
    <div className="relative flex justify-center items-center">
      <svg
        className="max-w-[500px] w-full h-auto"
        viewBox="0 0 138 130"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FCBA03"
          d="M49,-20.2C59.7,-9.7,62,13.7,52.4,28.1C42.8,42.6,21.4,48,-2.1,49.2C-25.5,50.4,-51,47.3,-61.6,32.3C-72.1,17.3,-67.6,-9.6,-54.8,-21.2C-42.1,-32.9,-21,-29.3,-0.9,-28.8C19.1,-28.2,38.3,-30.7,49,-20.2Z"
          transform="translate(73 54)"
        />
      </svg>
      <div className="max-w-[300px] w-full flex flex-col justify-center items-center mx-auto px-6 py-4 h-75 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
    </div>
  );
}
