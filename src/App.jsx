import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import HeroPage from "./pages/HeroPage";
import FormPage from "./pages/FormPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App