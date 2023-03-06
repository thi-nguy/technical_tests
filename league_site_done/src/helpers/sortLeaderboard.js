function getMatchesBetweenTeams(teamA, teamB, allMatches) {
  const matchesBetweenTiedTeams = allMatches.filter(
    (match) =>
      (match.homeTeam === teamA && match.awayTeam === teamB) ||
      (match.homeTeam === teamB && match.awayTeam === teamA)
  );
  return matchesBetweenTiedTeams;
}

function computeHeadToHeadPoints(matches, teamName) {
  let points = 0;

  for (let i = 0; i < matches.length; i++) {
    const homeTeam = matches[i].homeTeam;
    const awayTeam = matches[i].awayTeam;
    const homeScore = matches[i].homeTeamScore;
    const awayScore = matches[i].awayTeamScore;

    if (homeTeam === teamName) {
      if (homeScore > awayScore) {
        points += 3;
      } else if (homeScore === awayScore) {
        points += 1;
      }
    } else if (awayTeam === teamName) {
      if (awayScore > homeScore) {
        points += 3;
      } else if (homeScore === awayScore) {
        points += 1;
      }
    }
  }
  return points;
}

export function sortLeaderboard(leaderboard, allMatches) {
  // sort by points
  leaderboard.sort((a, b) => b.Points - a.Points);

  // Find tied team
  let i = 0;
  while (i < leaderboard.length) {
    let j = i + 1;
    while (
      j < leaderboard.length &&
      leaderboard[j].Points === leaderboard[i].Points
    ) {
      j++;
    }

    if (j - i > 1) {
      const tiedTeams = leaderboard.slice(i, j);

      //sort tiedTeams by Head To Head Points, or GD, or GF or by names.
      tiedTeams.sort((a, b) => {
        const matchesBetweenAB = getMatchesBetweenTeams(
          a.name,
          b.name,
          allMatches
        );
        if (matchesBetweenAB.length !== 0) {
          const aHeadToHead = computeHeadToHeadPoints(matchesBetweenAB, a.name);
          const bHeadToHead = computeHeadToHeadPoints(matchesBetweenAB, b.name);
          console.log("H2H point", a.name, aHeadToHead);
          console.log("H2H point", b.name, bHeadToHead);
          return (
            bHeadToHead - aHeadToHead ||
            b.GD - a.GD ||
            b.GF - a.GF ||
            a.name.localeCompare(b.name)
          );
        }
        return b.GD - a.GD || b.GF - a.GF || a.name.localeCompare(b.name);
      });

      // replace tied teams with sorted teams in leaderBoard
      leaderboard.splice(i, j - i, ...tiedTeams);
      i = j;
    } else {
      i = j;
    }
  }

  return leaderboard;
}
