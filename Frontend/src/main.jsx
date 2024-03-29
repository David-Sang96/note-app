import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
