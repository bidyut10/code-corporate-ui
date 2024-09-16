import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import HeroPage from "./pages/HeroPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App