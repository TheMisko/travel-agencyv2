import React from "react";
import MailForm from "./mailForm";

import { makeStyles } from "@material-ui/core/styles";
import {Modal,Backdrop,Fade,Fab,Typography} from "@material-ui/core/";




const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function ModalEmail({ naziv }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        color="primary"
        variant="extended"
        aria-label="delete"
        onClick={handleOpen}
      >
        <Typography variant="h4">REZERVISI</Typography>
      </Fab>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <MailForm naziv={naziv} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
