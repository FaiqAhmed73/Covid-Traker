import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

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
  title: {
    color: 'blue',
  }
}));

export default function InfoPanel() {
  const classes = useStyles();

  const [golobelData, SetGlobelData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch
        ("https://covid-19-data.p.rapidapi.com/totals", {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "2f23d23171msh722c8c29ac571ecp117bcajsnd58cf9e07bc1",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
          }
        })

      let data = await response.json();
      // console.log(data[0]);
      SetGlobelData(data[0]);
      console.log(data[0]);
    }
    getData();
  }, [])



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(golobelData).map(key => {
          return (
            <Grid item xs={12} sm={4}>
              <Paper
                className={classes.paper}
                elevation={3}>
                <h3 className= {classes.title}>
                  {key.toUpperCase()}
                  </h3>
                <h3>{golobelData[key]}</h3>

            </Paper>
            </Grid>
          )
        })}

      </Grid>
    </div>
  );
}
