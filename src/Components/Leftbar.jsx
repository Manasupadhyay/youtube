import { Container,  makeStyles, Typography } from "@material-ui/core";
import {  Collections, ExitToApp, Home, People,  PhoneAndroid, PhotoCamera, Reorder, Settings, Storefront, VideoCall } from "@material-ui/icons";


const useStyles = makeStyles((theme)=>({
  container:{
      position: "sticky",
      top: "0",
      height: "100vh",
      color: "white",
      paddingTop: theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
        backgroundColor: "white",
        color:"#555",
        border:"1px solid #ece7e7",
    }
  },
  item:{
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]:{
          marginBottom: theme.spacing(3),
          cursor: "pointer",
      }
  },
  text:{
      fontWeight: "500",
      [theme.breakpoints.down("sm")]:{
          display:"none",
      }
  },
  
  icon: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]:{
        fontSize: "18px", 
      },
   
  },

  
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
          <Home className={classes.icon}/>
          <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
          <People className={classes.icon}/>
          <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
          <Reorder className={classes.icon}/>
          <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
          <PhotoCamera className={classes.icon}/>
          <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
          <VideoCall className={classes.icon}/>
          <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
          <PhoneAndroid className={classes.icon}/>
          <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
          <Collections className={classes.icon}/>
          <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
          <Storefront className={classes.icon}/>
          <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
          <Settings className={classes.icon}/>
          <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
          <ExitToApp className={classes.icon}/>
          <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
