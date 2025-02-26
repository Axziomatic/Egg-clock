import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import RecipesPage from "./pages/RecipesPage";
import TimerPage from "./pages/TimerPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TimerPage />} />
          <Route path="recipes" element={<RecipesPage />} />
        </Route>
      </Routes>
    </>
  );
}
