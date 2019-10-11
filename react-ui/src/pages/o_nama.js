import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Mapa from "../components/mapa";
import KontaktInfo from "../components/kontaktInfo";
import Card from "@material-ui/core/Card";

const Onama = () => {
  return (
    <div>
      <NavBar />
      <div className="oNama-img">
        <div className="oNama-text">
          <h1>O Nama</h1>
          <h2>
            Objectively innovate empowered manufactured products whereas
            <br />
            parallel platforms. Holisticly predominate extensible testing
            <br />
            procedures for reliable supply chains.
          </h2>
        </div>
        <img src="https://wallpaperstream.com/wallpapers/full/new-york-city/New-York-City-Night-Cityscape.jpg" />
      </div>
      <div className="oNama-opis">
        <h1>TRAVEL AGENCY STORY</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </h2>
      </div>

      <div className="nas">
        <h1>Nas Tim</h1>
      </div>
      <div className="tim">
        <img src="https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg" />
        <img src="https://media.gettyimages.com/photos/confident-woman-picture-ida0063-000098" />
        <img src="https://paulmampillyguru.com/wp-content/uploads/2017/06/Mampilly_NoBG.png" />
        <img src="https://st3.depositphotos.com/12985790/16524/i/1600/depositphotos_165241112-stock-photo-handsome-smiling-man.jpg" />
      </div>
      <div className="kontakt-h1">
        <h1>Kontakt Info</h1>
      </div>

      <KontaktInfo />
      <div className="oNama-mapa">
        <Card>
          <Mapa />
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Onama;
