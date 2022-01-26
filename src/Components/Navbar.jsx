import { alpha, AppBar, Avatar, Badge,  InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import {  Cancel, Mail,  Notifications,  Search } from "@material-ui/icons";
import { useState } from "react";


const useStyles = makeStyles((theme)=>({
  
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },

    logoLg:{
      display:"none",
      [theme.breakpoints.up("xs")]:{
          display:"block"
      }
    },

  logoSm:{
      display:"block",
      [theme.breakpoints.up("xs")]:{
          display:"none"
      }
  } ,
  inputSearch:{
      color:"white",
      marginLeft:theme.spacing(1),
  },
  search:{
    display: "flex",
    alignItems:"center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down('xs')]:{
        display: (props)=> (props.open ? "flex" : "none")
    },
    },
    cancelButton:{
        [theme.breakpoints.up("sm")]:{
            display: "none",
        }
    },
   searchButton:{
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
        display: "none",
    }
    },
  icons:{ 
      alignItems: "center",
      display: (props)=> props.open ? "none": "flex",
  },
  badge:{
      marginRight: theme.spacing(2),
  },
  
  
}));

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
    <Toolbar className={classes.toolbar}>
    <Typography variant="h6" className={classes.logoLg}>
    Logo Here
    </Typography>
    <Typography variant="h6" className={classes.logoSm}>
    Logo
    </Typography>
    <div className={classes.search}>
            <Search/>
            <InputBase placeholder="Search..." className={classes.inputSearch}/>
            <Cancel className={classes.cancelButton} onClick={()=>setOpen(false)}/>
    </div>
    <div className={classes.icons}>
    <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
    <Badge badgeContent={4} color="secondary" className={classes.badge}>
        <Mail />
    </Badge>
    <Badge badgeContent={3} color="secondary" className={classes.badge}>
        <Notifications />
    </Badge>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;
