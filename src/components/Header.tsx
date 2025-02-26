export default function Header() {
  return (
    <>
      <header className="bg-slate-800 flex justify-center">
        <h1 className="text-2xl py-4 text-yellow-200">Time for Egg</h1>
      </header>
      <div className="flex justify-center bg-slate-700">
        <button className="py-2 px-4  bg-slate-800 text-l text-yellow-300 hover:bg-slate-600">
          Timer
        </button>
        <button className="py-2 px-4 mx-1 bg-slate-800 text-l text-yellow-300 hover:bg-slate-600">
          Recipes
        </button>
      </div>
    </>
  );
}
