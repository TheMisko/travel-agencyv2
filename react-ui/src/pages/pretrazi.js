import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import NewCard from "../components/new-card";
import axios from "axios";
import Footer from "../components/footer";

const Pretrazi = () => {
  const [on, setOn] = useState(false);
  const [ID, setID] = useState("Letovanje");

  const [destinacija, setDestinacija] = useState({});

  useEffect(() => {
    axios
      .get(`/api/ID/${ID}`)
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

  return (
    <>
      <NavBar />

      <div className="pretrazi-cards">
        <div class="wrap">
          <div onClick={() => setID("Letovanje")} class="box one">
            <div class="date"></div>
            <h1>LETOVANJE</h1>
          </div>

          <div onClick={() => setID("Zimovanje")} class="box two">
            <div class="date"></div>
            <h1>ZIMOVANJE</h1>
          </div>

          <div onClick={() => setID("Letovanje")} class="box three">
            <div class="date"></div>
            <h1>JUZNA AMERIKA</h1>
          </div>

          <div onClick={() => setID("Zimovanje")} class="box five">
            <div class="date"></div>
            <h1>EVROPA</h1>
          </div>
        </div>
      </div>
      <hr className="hr" />
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
