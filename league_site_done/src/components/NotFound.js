import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <img
        src={require("../assets/404.png")}
        alt={`Error 404: Page Not Found`}
      />{" "}
    </Box>
  );
};

export default NotFound;
