import AppHeader from "../components/global/AppHeader";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "components/router/AppRoutes";

const App = () => {
  return (
    <div className="container">
      <Router>
        <AppHeader />
        <div className=" p-6">
          <AppRoutes />
        </div>
      </Router>
    </div>
  );
};

export default App;
