import { Button, makeStyles } from "@material-ui/core";
import { Audiotrack, Person } from "@material-ui/icons";


const useStyles = makeStyles((theme)=>({
  button:{
    // color: "white",
    // background: theme.palette.primary.main,
    ...theme.myButton
  },
  
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        size="large"
        startIcon={<Audiotrack/>}
        // style={{background:"hsl(0,60%,50%)", color:"white"}}
        className={classes.button }
      >
        Material UI
      </Button>
    </div>
  );
};

export default App;
