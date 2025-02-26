import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="flex flex-col flex-1 justify-center bg-slate-700">
      <Outlet /> {/* Här visas alla sidor som definieras i <Route> */}
    </main>
  );
}
