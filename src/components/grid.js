import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Contenedor from './Contenedor'
import Cajita from './Cajita'
const estilos = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
      
        textAlign: 'center',
        
        padding: '340px 20px', 
        width: '800', 
     
        
        marginTop:"5px"
      },
    }));

const grid = () => {
  const classes = estilos();

  return (
    <div className={classes.root}>
        <Contenedor/>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={5} className={classes.paper}>
        <Cajita/>
        
        </Paper>
      </Grid>
      
      
    </Grid>
    </div>
  );
};

export default grid
