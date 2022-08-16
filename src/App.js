import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import ChatPage from "./pages/chatPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CONSTANTS from "./constants";
import AuthActionCreators from "./redux/actions/authActionCreators";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const refreshToken = localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
    
    if (refreshToken) {
      dispatch(AuthActionCreators.refreshRequest(refreshToken));
    }
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/chat">CHAT</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <PublicOnlyRoute exact path="/login" component={LoginPage} />
        <PublicOnlyRoute exact path="/signup" component={RegistrationPage} />
        <PrivateRoute exact path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
}

export default App;
