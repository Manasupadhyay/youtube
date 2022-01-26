import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";



const useStyles = makeStyles((theme)=>({
    card:{
       marginBottom: theme.spacing(5),
    },
    media:{
        height: "250px",
        [theme.breakpoints.down("sm")]:{
            height: "150px", 
        }
    }
  
}));

const Posts = () => {
  const classes = useStyles();
  return (
    < >
      <Card className={classes.card}>
          <CardActionArea>
              <CardMedia className={classes.media} 
                image="https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/09/Naruto-childhood-cover-image.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
                title="helo 1"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5">My First Post</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem dolores illum
                    ipsum, asperiores odit enim at autem delectus possimus, deserunt neque modi
                    perferendis adipisci, ea iure! Dicta, quia! Doloremque eligendi reiciendis
                    quam corporis dolore recusandae eius, at deleniti? At quia autem iste
                    perspiciatis velit quasi illum earum repellendus praesentium est.
                    quam corporis dolore recusandae eius, at deleniti? At quia autem iste
                    perspiciatis velit quasi illum earum repellendus praesentium est.
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
      </Card>
      
    </>
  );
};

export default Posts;
