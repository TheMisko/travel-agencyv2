import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navBar";
import NewCard from "../components/new-card";
import Footer from "../components/footer";

const Destinacije = () => {
  const [data, setData] = useState({});
  const [on, setOn] = useState(false);

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
      <div>
        <NavBar />
        <div className="new-card-destinacije">
          {on ? (
            data.map(destinacije => (
              <Link
                to={`/destinacija/${destinacije.naziv}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <NewCard info={destinacije} />
              </Link>
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

export default Destinacije;
