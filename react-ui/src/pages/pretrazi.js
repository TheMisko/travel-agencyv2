import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import NewCard from "../components/new-card";
import axios from "axios";
import Footer from "../components/footer";

const Pretrazi = () => {
  const lista = [
    {
      slika:
        "http://s1.bwallpapers.com/wallpapers/2014/01/29/winter-town_050450278.jpg",
      text: "ZIMOVANJE",
      ID: "Beograd"
    },
    {
      slika:
        "https://southamericatravelcentre.com.au/wp-content/uploads/2016/06/Rooftops-of-Cuzco-Peru1.jpg",
      text: "JUZNA AMERKA",
      ID: "Japan"
    },
    {
      slika:
        "https://www.jetsetter.com/uploads/sites/7/2018/04/bhbyGqxA-1380x1035.jpeg",
      text: "EVROPA",
      ID: "New York"
    },
    {
      slika:
        "https://media.npr.org/assets/img/2018/11/30/gettyimages-516986280-1-_wide-d2c31add9c33d5ec09aafa7f62171dca11c9fb65-s800-c85.jpg",
      text: "LETOVANJE",
      ID: "London"
    }
  ];
  const [data, setData] = useState({});
  const [on, setOn] = useState(false);
  const [ID, setID] = useState("London");

  // useEffect(() => {
  //   axios
  //     .get("/api/notes")
  //     .then(function(response) {
  //       setData(response.data);
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function() {
  //       setOn(true);
  //     });
  // }, []);

  const [apiInfo, setApiInfo] = useState(ID);

  const [destinacija, setDestinacija] = useState({});

  useEffect(() => {
    axios
      .get(`/api/notes/${ID}`)
      .then(function(response) {
        setDestinacija(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        setOn(true);
      });
  }, [ID]);
  const changeID = ID => {
    setID(ID);
  };
  console.log(ID);
  return (
    <>
      <NavBar />
      <div className="pretrazi-container">
        {lista.map(list => (
          <div onClick={() => setID(list.ID)} className="pretrazi">
            {" "}
            <h2>{list.text}</h2>
            <img src={list.slika} />
          </div>
        ))}
      </div>

      {/* <div className="pretrazi-card-container">
        <div className="new-card-flex">
          {on ? (
            data.map(destinacije => (
              <div className="new-card-flex">
                {" "}
                <Link
                  to={`/destinacija/${destinacije.naziv}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <NewCard info={destinacije} />
                </Link>
              </div>
            ))
          ) : (
            <div>loading </div>
          )}
        </div>
      </div> */}
      <div className="pretrazi-card-container">
        <div className="new-card-flex">
          {on ? (
            destinacija.map(destinacije => (
              <div className="new-card-flex">
                {" "}
                <Link
                  to={`/destinacija/${destinacije.naziv}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <NewCard info={destinacije} />
                </Link>
              </div>
            ))
          ) : (
            <div>loading </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pretrazi;
