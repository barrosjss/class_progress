import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./theme/App.css";

import CurrentDate from "./components/CurrentDate";
import SheetList from "./components/SheetList";
import CorteDetail from "./pages/CorteDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/corte/:corte" element={<CorteDetail />} />
        <Route
          path="/"
          element={
            <>
              <CurrentDate />
              <SheetList />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
