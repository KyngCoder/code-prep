import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/quiz" exact element={<Quiz />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
