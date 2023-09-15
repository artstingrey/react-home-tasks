import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DogsList from "./components/dogs/dog-list/dogs-list";
import MaxArrayNumber from "./components/max-array-number/max-array-number";
import TimeCounters from "./components/time-counters/time-counters";
import TodoPage from "./components/todo-page/todo-page";
import MainPage from "./components/pages/main-page/main-page";
import DogPage from "./components/pages/dog-page/dog-page";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <TodoPage />  */}

        {/* <TimeCounters /> */}
        {/* <MaxArrayNumber /> */}

        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/dogs/:id" element={<DogPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
