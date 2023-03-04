import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonAppBar from "./ButtonAppBar";
import LeaderBoard from "./Leaderboard";
import NotFound from "./NotFound";
import Schedule from "./Schedule";

function App() {
  return (
    <Box>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
