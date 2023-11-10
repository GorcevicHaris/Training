import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Loyaout from "./pages/Loyaout";
import ContextFunction from "./pages/Kontext";

function App() {
  console.log("asdasd");
  return (
    <BrowserRouter>
      <ContextFunction>
        <Loyaout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Loyaout>
      </ContextFunction>
    </BrowserRouter>
  );
}

export default App;
