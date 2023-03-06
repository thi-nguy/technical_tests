export function generateLeaderboard({ matches }) {
  const leaderboard = {};
  matches.forEach((match) => {
    const homeTeam = match["homeTeam"];
    const awayTeam = match["awayTeam"];
    const homeScore = match["homeTeamScore"];
    const awayScore = match["awayTeamScore"];
    const matchPlayed = match["matchPlayed"];

    if (!leaderboard[homeTeam]) {
      leaderboard[homeTeam] = { MP: 0, GF: 0, GA: 0, GD: 0, Points: 0 };
    }

    if (!leaderboard[awayTeam]) {
      leaderboard[awayTeam] = { MP: 0, GF: 0, GA: 0, GD: 0, Points: 0 };
    }

    if (matchPlayed) {
      leaderboard[homeTeam]["MP"]++;
      leaderboard[homeTeam]["GF"] += homeScore;
      leaderboard[homeTeam]["GA"] += awayScore;
      leaderboard[homeTeam]["GD"] += homeScore - awayScore;
      leaderboard[awayTeam]["MP"]++;
      leaderboard[awayTeam]["GF"] += awayScore;
      leaderboard[awayTeam]["GA"] += homeScore;
      leaderboard[awayTeam]["GD"] += awayScore - homeScore;
      if (homeScore > awayScore) {
        leaderboard[homeTeam]["Points"] += 3;
      } else if (homeScore === awayScore) {
        leaderboard[homeTeam]["Points"] += 1;
        leaderboard[awayTeam]["Points"] += 1;
      } else if (homeScore < awayScore) {
        leaderboard[awayTeam]["Points"] += 3;
      }
    }
  });
  return leaderboard;
}
