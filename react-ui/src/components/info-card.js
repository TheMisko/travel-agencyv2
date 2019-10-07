import React from "react";
import { Link } from "react-router-dom";

import { Card, CardActionArea,CardActions,CardContent, CardMedia,Button, Typography  } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "15px",
    marginBottom: "30px"
  }
});
const InfoCard = ({ slike, naziv, opis, cena }) => {
  const classes = useStyles();
  return (
    <div className="test-flex">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={slike[0]}
            title={naziv}
          />
          <Link to={`/destinacija/${naziv}`} style={{ textDecoration: "none" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {naziv}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {opis}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {cena}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default InfoCard;
