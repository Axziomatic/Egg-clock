import Button from "./Button";
import Timer from "./Timer";

export default function TimerContainer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-900 mx-6 px-6 py-4 h-75">
        <div className="flex justify-between">
          <Button label="Soft Boiled" />
          <Button label="Medium Boiled" />
          <Button label="Hard Boiled" />
        </div>
        <Timer />
      </div>
    </>
  );
}
