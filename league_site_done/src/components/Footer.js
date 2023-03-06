import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { API_VERSION_URI } from "../helpers/endpoints.js"


const Footer = () => {

  const [apiVersion, setApiVersion] = useState(null);

  useEffect(() => {
    fetch(API_VERSION_URI)
      .then((response) => response.json())
      .then((fetched_data) => {
        setApiVersion(fetched_data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#F6F7F7",
        height: "40px",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
      }}
      component="footer"
      square
    >
      <Box
        sx={{
          mr: 5,
        }}
      >
        <Typography variant="caption" color="#4B5C68">
          {apiVersion && `API Version: ${apiVersion.version}`}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
