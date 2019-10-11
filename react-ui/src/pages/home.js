import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Header from "../components/header";
import Utisci from "../components/utisci";

import KontaktInfo from "../components/kontaktInfo";

import Footer from "../components/footer";
import NewCard from "../components/new-card";

import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "15px",
    marginBottom: "30px"
  }
});

const Home = () => {
  const [data, setData] = useState({});
  const [on, setOn] = useState(false);
  const classes = useStyles();
  const first = "47.444";
  const second = "-122.176";
  useEffect(() => {
    axios
      .get("/api/notes")
      .then(function(response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        setOn(true);
      });
  }, []);

  return (
    <>
      <div className="background-home">
        <Header />

        <div className="top">
          <h1>TOP PONUDE</h1>
        </div>
        <div className="test-flex">
          {on ? (
            data.splice(0, 6).map(dest => (
              <Link
                to={`/destinacija/${dest.naziv}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NewCard info={dest} />
              </Link>
            ))
          ) : (
            <h1>loading</h1>
          )}
        </div>
        <div>
          <Utisci />
        </div>
        <div>{/* <Mapa /> */}</div>
        <div className="kontakt-info-home">
          <h1>Kontaktirajte Nas</h1>
          <KontaktInfo />
        </div>
        <div className="background">
          <div className="footer-home">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
