import { Link } from "react-router-dom";
// import { useTasks } from "../store/taskContext";
import { useTasks } from "../store/taskContexts";

export const Header = () => {
  const { darkMode, setDarkMode } = useTasks();

  return (
    <header className="header">
      <h1>Task Tracker</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
