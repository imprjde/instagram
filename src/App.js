import "./App.css";
import Instagram from "./components/Instagram";
import Home from "./components/Home";
import MockInstagram from "./components/MockInstagram";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<MockInstagram />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/404Error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
