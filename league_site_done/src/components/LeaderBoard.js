import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useMemo } from "react";
import LeagueService from "../services/LeagueService";
import LeaderboardTable from "./LeaderboardTable";

const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const leagueService = useMemo(() => new LeagueService(), []);

  useEffect(() => {
    async function fetchData() {
      await leagueService.fetchData();
      const sortedLeaderboard = leagueService.getLeaderboard();
      console.log(sortedLeaderboard);
      setLeaderboard(sortedLeaderboard);
    }
    fetchData();
  }, [leagueService]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 7.5,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2.5, fontWeight: "bold" }}>
        League Standings
      </Typography>
      <Box>
        <LeaderboardTable leaderboard={leaderboard} />
      </Box>
    </Box>
  );
};

export default LeaderBoard;
