import React, { useState } from "react";
import Success from "./success";

import axios from "axios";

import { Button, TextField } from "@material-ui/core";

const MailForm = ({ naziv, info }) => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    phoneNumber: "",
    naziv: naziv
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    setSuccess(true);
    const { email, username, phoneNumber, naziv } = values;
    const form = await axios
      .post("/api/form", {
        email,
        username,
        phoneNumber,
        naziv
      })
      .then(setValues({ ...values, email: "", username: "", phoneNumber: "" }));
  };
  console.log(info);
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div className="mail-info">
            <h1>{naziv} </h1> <h4>{info.information.departureLocation}</h4>
          </div>

          <TextField
            error={error}
            id="filled-full-width"
            label="Ime"
            style={{ margin: 8 }}
            placeholder="Vase Ime"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            value={values.username}
            onChange={onChange}
            name="username"
          />

          <TextField
            id="filled-full-width"
            label="Email"
            style={{ margin: 8 }}
            placeholder="Vas Email"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            value={values.email}
            onChange={onChange}
            name="email"
          />

          <TextField
            id="filled-full-width"
            label="Broj"
            style={{ margin: 8 }}
            placeholder="Vas Broj telefona"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true
            }}
            value={values.phoneNumber}
            onChange={onChange}
            name="phoneNumber"
          />
          <div className="mail-btn">
            <Button color="primary" type="submit" variant="contained">
              Posalji
            </Button>
          </div>
        </form>
      </div>
      <Success success={success} />
    </>
  );
};

export default MailForm;
