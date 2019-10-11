import React from "react";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";

const KontaktInfo = () => {
  return (
    <div className="oNama-kontakt">
      <div className="oNama-kontakt-flex">
        <div className="kontakt-info">
          <div className="kontakt-icon">
            <LocationOnIcon fontSize="large" />
          </div>
          <h2>Ulica Marka Markovica</h2>
        </div>
        <div className="kontakt-info">
          <div className="kontakt-icon">
            <PhoneIphoneIcon fontSize="large" />
          </div>{" "}
          <h2>069-788-788-7</h2>
        </div>
        <div className="kontakt-info">
          <div className="kontakt-icon">
            <EmailIcon fontSize="large" />
          </div>{" "}
          <h2>agencijaEmail@gmail.com</h2>
        </div>
      </div>
    </div>
  );
};

export default KontaktInfo;
