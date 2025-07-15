import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { useTokenChecker } from "./hook/useTokenChecker";

function App() {
  useTokenChecker();
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
