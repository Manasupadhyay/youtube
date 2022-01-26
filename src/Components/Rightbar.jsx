import { Avatar,  Container, ImageList, ImageListItem, makeStyles, Typography } from "@material-ui/core";

import { AvatarGroup } from "@material-ui/lab";


const useStyles = makeStyles((theme)=>({
    container:{
      position: "sticky",
      top:0,
      paddingTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
            display: "none",
        },
    },
    title:{
      fontSize: 16,
      fontWeight: "500",
      color: "#555",
    }
  
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
    <Typography  gutterBottom className={classes.title} >Online Friends</Typography>
      <AvatarGroup max={5} style={{marginBottom:"20px"}}>
    <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg"  />
    <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
    <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg" />    
    <Avatar alt="Cindy Baker"  >M</Avatar>    
    <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg" />
    <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg" />
    <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/6.jpg" />
    <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg" />
    </AvatarGroup>
    <Typography  className={classes.title} gutterBottom>Image Gallery</Typography>
    <ImageList rowHeight={100} className={classes.imageList} cols={2}>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="" />
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt=""/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt=""/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/morning.jpg" alt=""/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt=""/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/honey.jpg" alt=""/>
    </ImageListItem>
    
    </ImageList>
    </Container>
  );
};

export default Rightbar;
