import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Calculator, ServerStatus } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>
        <ServerStatus loading={loading} setLoading={setLoading} />
      </Grid>
      <Grid item>
        <Calculator loading={loading} />
      </Grid>
    </Grid>
  );
};

export default App;
