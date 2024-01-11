import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { OperatorSelect } from ".";
import CalculateOperation from "../utils/request";

const Calculator = (props) => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [operator, setOperator] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const calculate = () => {
    CalculateOperation.calculate(x, y, operator).then((data) => {
      if (!data.data.error) {
        setResult(data.data.result);
      } else {
        setError(data.data.error);
        setOpen(true);
      }
    });
  };

  if (props.loading) {
    return (
      <Grid item>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error">
          The calculation failed with the message: {error}
        </Alert>
      </Snackbar>
      <Grid item xs={2}>
        <TextField
          id="outlined-number"
          label="x"
          type="number"
          value={x}
          onChange={(event) => setX(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <OperatorSelect operator={operator} setOperator={setOperator} />
      </Grid>
      <Grid item xs={2}>
        <TextField
          id="outlined-number"
          label="y"
          type="number"
          value={y}
          onChange={(event) => setY(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" disabled={!operator} onClick={calculate}>
          =
        </Button>
      </Grid>

      <Grid item xs={2}>
        <TextField
          id="outlined-number"
          label="Result"
          type="number"
          disabled={true}
          value={result ?? ""}
        />
      </Grid>
    </Grid>
  );
};

export default Calculator;
