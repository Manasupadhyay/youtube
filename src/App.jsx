import {  Grid, makeStyles } from "@material-ui/core";
import Add from "./Components/Add";
import Feeds from "./Components/Feeds";
import Leftbar from "./Components/Leftbar";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";


const useStyles = makeStyles((theme)=>({
  [theme.breakpoints.down("sm")]:{
    display: "none",
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar/>
      <Grid container>
      <Grid item sm={2} xs={2}>
        <Leftbar/>
      </Grid>
      <Grid item sm={7} xs={10}> 
      <Feeds/>
      </Grid>
      <Grid item sm={3} className={classes.right}>
        <Rightbar/>
      </Grid>
      </Grid>
      <Add/>
    </div>
  );
};

export default App;
