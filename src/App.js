import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <p>Evan Kosei Cook's Personal Page</p>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
