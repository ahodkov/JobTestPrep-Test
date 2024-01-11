import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import CalculateOperation from "../utils/request";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const SERVER_DOWN_TEXT = "The server is down right now, sorry.";
const SERVER_WORKS_FINE_TEXT = "The server is working fine!";

const ServerStatus = (props) => {
  const [serverStatus, setServerStatus] = useState(false);
  useEffect(() => {
    checkStatusServer();
    props.setLoading(false);
  });

  const checkStatusServer = () => {
    CalculateOperation.checkStatusServer()
      .then(() => setServerStatus(true))
      .catch(() => setServerStatus(false));
  };

  if (props.loading) {
    return null;
  }

  return (
    <Grid container>
      <Grid item>
        {serverStatus ? (
          <InsertEmoticonIcon />
        ) : (
          <SentimentVeryDissatisfiedIcon />
        )}
      </Grid>
      <Grid item>
        <Typography>
          {serverStatus ? SERVER_WORKS_FINE_TEXT : SERVER_DOWN_TEXT}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServerStatus;
