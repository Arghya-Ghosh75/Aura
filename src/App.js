import "./App.css";
import { images } from "./db/images";
import { Home } from "./pages/Home/Home";
import { useBrowser } from "./context/browser-context";
import { useEffect } from "react";
import { Task } from "./pages/Task/Task";

function App() {
  const index = Math.floor(Math.random() * images.length);
  const bgImage = images[index].image;

  const { name, browserDispatch } = useBrowser();

  // Logs ONLY when name actually changes
  useEffect(() => {
    const userName = localStorage.getItem("name");
    browserDispatch({
      type: "NAME",
      payload: userName,
    });
  }, []);
  return (
    <div className="app" style={{ backgroundImage: `url("${bgImage}")` }}>
      {name ? <Task /> : <Home />}
    </div>
  );
}

export default App;
