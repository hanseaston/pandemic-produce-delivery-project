import React, { useEffect } from "react";
import { Card, Grid, Typography, CardContent } from "@material-ui/core";
import Countup from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return <h2> Loading</h2>;

  return (
    <div>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <Countup
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>Number of Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recoveries
            </Typography>
            <Typography variant='h5'>Real Data</Typography>
            <Typography color='textSecondary'>Real Date</Typography>
            <Typography variant='body2'>Number of Recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>Real Data</Typography>
            <Typography color='textSecondary'>Real Date</Typography>
            <Typography variant='body2'>Number of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
