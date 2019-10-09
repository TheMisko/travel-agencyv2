import React from "react";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    maxWidth: 350
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const classes = useStyles();

<>
  <div className="kontakt-agenciju">
    <h1>Kontaktirajte Agenciju</h1>
  </div>
  <div className="kontakt">
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Posetite Nas
        </Typography>

        <Typography variant="body2" component="p">
          Posetite Nasu agenciju ili nam posaljite E-mail ako imate neka
          odredjena pitanja.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <LocationOnIcon color="primary" /> Ul. Marka Markovica
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small">
          <AccessTimeIcon color="primary" /> 08-21h
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small">
          <PhoneAndroidIcon color="primary" /> 069-788-788-7
        </Button>
      </CardActions>
      <CardActions>
        <a href="https://www.facebook.com">
          <Button size="small">
            <FacebookIcon color="primary" /> Agencija_FB
          </Button>
        </a>
      </CardActions>
      <CardActions>
        <a href="https://www.instagram.com">
          <Button size="small">
            <InstagramIcon color="primary" /> Agencija_IG
          </Button>
        </a>
      </CardActions>
    </Card>
  </div>
</>;
