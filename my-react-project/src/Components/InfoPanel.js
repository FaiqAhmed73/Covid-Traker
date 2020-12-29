import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: 1000,
      margin: '0 auto',
      marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoPanel() {
  const classes = useStyles();

  useEffect(() => {
    async function getData(){
        const response = await fetch
        ("https://covid-19-data.p.rapidapi.com/report/totals?date=2020-07-21", {
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "2f23d23171msh722c8c29ac571ecp117bcajsnd58cf9e07bc1",
              "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
          }
      })
      
      let data = await response.json();
          console.log(data);
    }
    getData();
})



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Grid 1</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Grid 2</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Grid 3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
