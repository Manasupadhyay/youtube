import React, { useState } from 'react';
import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import {Add as AddIcon} from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme)=>({
fab:{
    position: "fixed",
    bottom: "5%",
    right: "5%",
},
container:{
    height: "550px",
    width: "500px",
    backgroundColor: "white",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: 'auto',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("xs")]:{
        height: "100vh",
        width: "100vw",
    }
},
form:{
    padding: theme.spacing(2),
},
item:{
    marginBottom: theme.spacing(3),
}

}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
 const Add = () => {
     const [open, setOpen] = useState(false);
     const [openAlert, setOpenAlert] =useState(false);
    const classes = useStyles();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
    
  return (
  <>
      <Tooltip title="Add" aria-label="add">
  <Fab color="primary" className={classes.fab} onClick={()=>setOpen(true)}>
    <AddIcon/>
  </Fab>
</Tooltip>
    <Modal open={open}>
    <Container className={classes.container}>
        <form className={classes.form} autoComplete="off">
        <div className={classes.item}>
        <TextField id="standard-basic" label="Standard" size='small' style={{width:"100%"}} />
        </div>
        <div className={classes.item}>
        <TextField id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="Tell Your Story..."
          variant="outlined"
           label="Description" size='small' style={{width:"100%"}} />
        </div>
        <div className={classes.item} >
        <TextField select label="Favourite Anime"  value="Naruto" style={{width:"50%",paddingTop:"10px"}} >
            <MenuItem value="Naruto">Naruto</MenuItem>
            <MenuItem value="One Piece">One Piece</MenuItem>
            <MenuItem value="Death Note">Death Note</MenuItem>
            <MenuItem value="91 Days">91 Days</MenuItem>
        </TextField>
        </div> 
        <div className={classes.item}>
        <FormLabel component="legend">Choose a series</FormLabel>
        <RadioGroup  >
        <FormControlLabel value="My Name" control={<Radio size="small"/>} label="My Name" />
        <FormControlLabel value="Vincenzo" control={<Radio size="small"/>} label="Vincenzo" />
        <FormControlLabel value="HellBound" control={<Radio size="small"/>} label="HellBound" />
        <FormControlLabel value="One Piece" disabled control={<Radio size="small"/>} label="(One piece)" />
        </RadioGroup>
        </div>
        <div className={classes.item}>
            <Button variant='outlined' color="primary" style={{marginRight:"20px"}} onClick={()=>setOpenAlert(true)}>Create</Button>
            <Button variant='outlined' color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
        </div>
        </form>
    </Container>
    </Modal>
    <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical:"bottom", horizontal:"left" }}>
    <Alert onClose={handleClose} severity="success">
        This is a success message!
    </Alert>
    </Snackbar>
  </>
  )
}

export default Add;
