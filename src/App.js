import React from "react";
import Tabs from "./components/Tabs";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container'
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import logo from "./images/logo.png";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: -10,
    padding:-10
    
  },
  logo: {
    marginRight: theme.spacing(2),
    marginLeft:'10%'
  },
  title: {
    flexGrow: 1
  },
  paper: {
    backgroundColor: "#1f2640",
    margin:'auto'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    margin: 0,
    marginBottom:70,
    padding: theme.spacing(1)
  },
  
}));








export default function App() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Paper square className={classes.paper}>
          <AppBar
            position="static"
            color="transparent"
            indicatorColor="primary"
            className={classes.appBar}
          >
            <img src={logo} width="8%" height="8%" className={classes.logo} />
          </AppBar>
        </Paper>
      </div>
      
      <Container>
      <Tabs />
      </Container>


    </div>
  );
}
