import React from "react";
import {
  TextField,
  makeStyles,
  ClickAwayListener,
  Paper,
} from "@material-ui/core";
import "./index.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

export default function MaterialPG(props) {
  const openInitState = { from: false, to: false };
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [opens, setOpens] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    // setOpens({ ...openInitState });
  };

  const handleChange = (date, name) => {
    name === "from" ? setFrom(date) : setTo(date);
    handleClose();
  };

  const handleOpen = (name) => {
    const openFrom = { from: true };
    const openTo = { to: true };
    name === "from" ? setOpens({ ...openFrom }) : setOpens({ ...openTo });
  };

  const ToolBar = () => (
    <div className="tool-bar" style={{ position: "absolute" }}>
      <div className="">APPLY</div>
      <div className="">CANCEL</div>
    </div>
  );

  return (
    <>
      <div className="date-picker-container">
        {/* <button onClick={handleClick}>toggle first</button> */}
        <div className="from-to-wrapper flex align-center">
          <div className="from" onClick={() => handleOpen("from")}>
            {from.toDateString()}
          </div>
          <div className="">-</div>
          <div className="from" onClick={() => handleOpen("to")}>
            {to.toDateString()}
          </div>
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="from-pos">
            <KeyboardDatePicker
              // disableToolbar
              ToolbarComponent={() => <ToolBar />}
              variant="inline"
              margin="normal"
              // cancelLabel="cancel"
              open={!!opens?.from}
              okLabel="APPLY"
              onClose={handleClose}
              value={from}
              error
              invalidDateMessage={() => <>hello</>}
              onChange={(e) => {
                handleChange(e, "from");
              }}
              id="date-picker-dialog"
              label="Date picker dialog"
              // orientation="landscape"
              format="MM/dd/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              style={{ display: "none", position: "absolute", top: "150" }}
              PopoverProps={{
                style: {
                  ...{ top: "50px" },
                },
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            // cancelLabel="cancel"
            open={!!opens?.to}
            okLabel="APPLY"
            value={to}
            onClose={handleClose}
            onChange={(e) => {
              handleChange(e, "to");
            }}
            id="date-picker-dialog"
            label="Date picker dialog"
            // orientation="landscape"
            format="MM/dd/yyyy"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            style={{ display: "none" }}
            PopoverProps={{ style: { ...{ top: "50px", left: "200px" } } }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}
