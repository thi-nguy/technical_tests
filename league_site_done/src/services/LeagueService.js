/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM,
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 *
 */
import { TOKEN_URI } from "../helpers/endpoints.js";
import { ALL_MATCHES_URI } from "../helpers/endpoints.js";
import { generateLeaderboard } from "../helpers/generateLeaderboard.js";
import { sortLeaderboard } from "../helpers/sortLeaderboard.js";

class LeagueService {
  constructor() {
    this.all_matches = [];
  }
  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array} matches List of matches.
   */
  setMatches(matches) {
    this.all_matches = matches;
  }

  /**
   * Returns the full list of matches.
   *
   * @returns {Array} List of matches.
   */
  getMatches() {
    return this.all_matches;
  }

  /**
   * Returns the leaderboard in a form of a list of JSON objecs.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array} List of teams representing the leaderboard.
   */
  getLeaderboard() {
    const leaderboard = generateLeaderboard(this.all_matches);
    const leaderboardArray = Object.entries(leaderboard).map(
      ([name, stats]) => ({
        name,
        ...stats,
      })
    );
    const allMatches = this.getMatches();
    const sortedLeaderboard = sortLeaderboard(
      leaderboardArray,
      allMatches.matches
    );
    return sortedLeaderboard;
  }

  /**
   * Asynchronic function to fetch the data from the server.
   */
  async fetchData() {
    try {
      const tokenResponse = await fetch(TOKEN_URI);
      const tokenData = await tokenResponse.json();
      const dataResponse = await fetch(ALL_MATCHES_URI, {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      });
      const fetched_matches = await dataResponse.json();
      this.setMatches(fetched_matches);
      return fetched_matches;
    } catch (err) {
      console.error(err);
    }
  }
}

export default LeagueService;
