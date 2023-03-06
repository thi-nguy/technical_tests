import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import getDate from "../helpers/getDate.js";

const ScheduleTable = ({ matchesList }) => {
  return (
    <TableContainer sx={{ width: "90vw" }} component={Paper}>
      <Table
        sx={{
          minWidth: 350,
          "& tbody tr:nth-of-type(even)": {
            bgcolor: "#F6F7F7",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                display: { xs: "none", sm: "table-cell" },
              }}
            >
              Date/Time
            </TableCell>
            <TableCell
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                display: { xs: "none", sm: "none", md: "table-cell" },
              }}
            >
              Stadium
            </TableCell>
            <TableCell></TableCell>

            <TableCell
              align="center"
              sx={{ fontSize: "12px", fontWeight: "bold", minWidth: "70px" }}
            >
              Home Team
            </TableCell>
            <TableCell sx={{ minWidth: "70px" }}></TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "12px", fontWeight: "bold", minWidth: "70px" }}
            >
              Away Team
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        {matchesList ? (
          <TableBody>
            {matchesList.map((row) => (
              <TableRow key={row.matchDate}>
                <TableCell
                  align="right"
                  sx={{
                    width: "100px",
                    display: { xs: "none", sm: "table-cell" },
                  }}
                >
                  {getDate(row.matchDate)}
                </TableCell>
                <TableCell
                  sx={{
                    display: { xs: "none", sm: "none", md: "table-cell" },
                  }}
                >
                  {row.stadium}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {row.homeTeam}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={`https://flagsapi.codeaid.io/${row.homeTeam}.png`}
                    alt={row.homeTeam}
                    style={{
                      height: "37px",
                      width: "53px",
                    }}
                  />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  {row.matchPlayed
                    ? `${row.homeTeamScore} : ${row.awayTeamScore}`
                    : "- : -"}
                </TableCell>
                <TableCell align="center">
                  <img
                    src={`https://flagsapi.codeaid.io/${row.awayTeam}.png`}
                    alt={row.awayTeam}
                    style={{
                      height: "37px",
                      width: "53px",
                    }}
                  />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  {row.awayTeam}
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

export default ScheduleTable;
