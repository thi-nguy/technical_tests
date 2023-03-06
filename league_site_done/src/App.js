import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Schedule from "./components/Schedule";
import LeaderBoard from "./components/LeaderBoard";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";

function App() {
  return (
    <Router>
      <Box>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
