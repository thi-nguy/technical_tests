import LeagueService from "../services/LeagueService.js";
import { generateLeaderboard } from "./generateLeaderboard.js";
import { sortLeaderboard } from "./sortLeaderboard.js";

// Use this file to test functions. To use it, need to add type: node into package.json and add import fetch from "node-fetch"
const myService = new LeagueService();
await myService.fetchData();

const allMatches = myService.getMatches();

const leaderboard = generateLeaderboard(allMatches);
console.log("unsorted leaderboard: ", leaderboard);

const leaderboardArray = Object.entries(leaderboard).map(([name, stats]) => ({
  name,
  ...stats,
}));

console.log("leaderboardArray: ", leaderboardArray);
console.log("data.matches: ", allMatches.matches);

const sorted_leaderboard = sortLeaderboard(
  leaderboardArray,
  allMatches.matches
);
console.log("sorted_leaderboard", sorted_leaderboard);
