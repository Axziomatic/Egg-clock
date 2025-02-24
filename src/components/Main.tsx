import Button from "./Button";
import Timer from "./Timer";

export default function Main() {
  return (
    <main className="bg-slate-700">
      <div className="flex flex-col bg-slate-900 mx-6 px-6 py-4">
        <div className="flex justify-between">
          <Button label="Soft Boiled" />
          <Button label="Medium Boiled" />
          <Button label="Hard Boiled" />
        </div>
        <Timer />
      </div>
    </main>
  );
}
