import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import { useTasks } from "./store/taskContexts";

const App = () => {
  const { darkMode } = useTasks();

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
