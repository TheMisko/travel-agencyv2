import React, { useState } from "react";

import Mapa from "./mapa";
import ModalImage from "./modalImage";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CancelIcon from "@material-ui/icons/Cancel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "2%"
  }
}));

export default function TabInfo({ info, tourPlan, gallery, naziv }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [imgSrc, setImgSrc] = useState("");
  const [openImage, setOpenImage] = useState(false);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function getImage(src) {
    setImgSrc(src);
    setOpenImage(true);
  }
  console.log(imgSrc);
  console.log(openImage);
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab
              onClick={() => setShowMap(false)}
              label="Informacije"
              {...a11yProps(0)}
            />
            <LinkTab
              onClick={() => setShowMap(false)}
              label="Plan Ture"
              {...a11yProps(1)}
            />
            <LinkTab
              onClick={() => setShowMap(true)}
              label="Lokacija"
              {...a11yProps(2)}
            />
            <LinkTab
              onClick={() => setShowMap(false)}
              label="Galerija"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <div className="background-tab">
          <div className="tab-container">
            <TabPanel value={value} index={0}>
              <div className="tab-info">
                <h4>{info.info}</h4>
              </div>
              <div className="tab-naziv">
                <h3>Destinacija:</h3> <h3 className="tab-naziv-h3">{naziv}</h3>
              </div>
              <div className="tab-date">
                <h3>Vreme Polaska:</h3> <h4>{info.date}</h4>
              </div>
              <div className="tab-date">
                <h3>Lokacija Polaska:</h3> <h4>{info.departureLocation}</h4>
              </div>
              <div className="tab-date">
                <h3>Povratna Lokacija:</h3> <h4>{info.returnLocation}</h4>
              </div>
              <div className="tab-uracunato">
                <h3>Uracunato:</h3>
                <div className="test">
                  {info.uracunato.map(incl => (
                    <div className="uracunato-icons">
                      <CheckBoxIcon color="primary" />
                      <h4> {incl}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tab-uracunato">
                <h3>Nije Uracunato:</h3>
                <div className="test">
                  {info.nijeUracunato.map(excl => (
                    <div className="uracunato-icons">
                      <CancelIcon color="primary" />
                      <h4> {excl}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                {tourPlan.map((tour, index) => (
                  <div className="tour-dan">
                    <div>
                      <h2>Dan: {index + 1}</h2>
                    </div>{" "}
                    <h4>{tour}</h4>
                  </div>
                ))}
              </div>
            </TabPanel>
            <div className="map-container">{showMap ? <Mapa /> : null}</div>

            <TabPanel value={value} index={2}></TabPanel>
            <TabPanel value={value} index={3}>
              <div className="tab-img">
                {gallery.map(slike => (
                  <div className="tab-img-child">
                    <img onClick={() => getImage(slike)} src={slike} />
                  </div>
                ))}
              </div>
            </TabPanel>
          </div>
        </div>

        <ModalImage
          src={imgSrc}
          openImg={openImage}
          setOpenImage={setOpenImage}
        />
      </div>
    </>
  );
}
