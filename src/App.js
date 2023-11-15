import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContextFunction from "./pages/Kontext";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  console.log("asdasd");
  return (
    <BrowserRouter>
      <ContextFunction>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </ContextFunction>
    </BrowserRouter>
  );
}

export default App;
