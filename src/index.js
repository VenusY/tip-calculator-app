import { createRoot } from "react-dom/client";
import App from "./components/App.js";
import "./styles/index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
