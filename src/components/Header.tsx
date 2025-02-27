import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-purple-200 flex justify-center">
        <h1 className="text-4xl font-bold py-4 text-slate-700">Time for egg</h1>
      </header>
      <div className="flex justify-left bg-yellow-50">
        <Link to="/">
          <button className="py-2 px-4 ml-1 rounded-b-md bg-purple-200 text-l slate-700 hover:bg-purple-400">
            Timer
          </button>
        </Link>
        <Link to="/recipes">
          <button className="py-2 px-4 mx-1 rounded-b-md bg-purple-200 text-l slate-700 hover:bg-purple-400">
            Recipes
          </button>
        </Link>
      </div>
    </>
  );
}
