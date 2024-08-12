import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import HousePricePredProject from "./screens/HousePricePredProject";

function App() {
  return (
    <div className="font-bodyFont">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/house-price-prediction-project"
            element={<HousePricePredProject />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
