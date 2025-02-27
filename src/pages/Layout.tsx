import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="flex flex-col flex-1 justify-center bg-yellow-50">
      <Outlet />
    </main>
  );
}
