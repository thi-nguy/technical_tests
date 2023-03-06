import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";

const LeaderboardTable = ({ leaderboard }) => {
  return (
    <TableContainer sx={{ width: "90vw" }} component={Paper}>
      <Table
        sx={{
          minWidth: 200,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                minWidth: "70px",
              }}
            >
              Team Name
            </TableCell>
            <TableCell></TableCell>
            <TableCell sx={{ fontSize: "12px", fontWeight: "bold" }}>
              MP
            </TableCell>
            <TableCell
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                display: { xs: "none", sm: "table-cell" },
              }}
            >
              GF
            </TableCell>
            <TableCell
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                display: { xs: "none", sm: "table-cell" },
              }}
            >
              GA
            </TableCell>
            <TableCell
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                display: { xs: "table-cell", sm: "none" },
              }}
            >
              GD
            </TableCell>
            <TableCell
              sx={{ fontSize: "12px", fontWeight: "bold" }}
              align="center"
            >
              Points
            </TableCell>
          </TableRow>
        </TableHead>
        {leaderboard ? (
          <TableBody>
            {leaderboard.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ width: "60px" }}>
                  <img
                    src={`https://flagsapi.codeaid.io/${row.name}.png`}
                    alt={row.name}
                    style={{
                      height: "37px",
                      width: "53px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell>{row.MP}</TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {row.GF}
                </TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>
                  {row.GA}
                </TableCell>
                <TableCell sx={{ display: { xs: "table-cell", sm: "none" } }}>
                  {row.GD}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#025FEB",
                  }}
                  align="center"
                >
                  {row.Points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <TableBody />
        )}
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTable;
