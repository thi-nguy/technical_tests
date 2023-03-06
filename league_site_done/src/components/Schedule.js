import Box from "@mui/material/Box";
import LeagueService from "../services/LeagueService";
import { useState, useEffect, useMemo } from "react";
import ScheduleTable from "./ScheduleTable";
import { Typography } from "@mui/material";

const Schedule = () => {
  const [matches, setMatches] = useState([]);
  const leagueService = useMemo(() => new LeagueService(), []);

  useEffect(() => {
    async function fetchData() {
      await leagueService.fetchData();
      const matches = leagueService.getMatches();
      setMatches(matches.matches);
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
        League Schedule
      </Typography>
      <ScheduleTable matchesList={matches} />
    </Box>
  );
};

export default Schedule;
