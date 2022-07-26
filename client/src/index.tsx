import { createRoot } from "react-dom/client";
import App from "./App";
import { Layout } from "./components/Layout/Layout";
import "./styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(<App />);
