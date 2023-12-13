import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/TestField/InputField";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Toaster from "./Components/Toaster/Toaster.js";

const Form = () => {
  const [userData, setUserData] = useState({
    userName: "",
    emailId: "",
    phoneNo: "",
    designation: "",
    yearsOfExp: "",
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const apiData = () => {
    axios
      .post("http://localhost:8001/userDetails", {
        userName: userData.userName,
        emailId: userData.emailId,
        phoneNo: userData.phoneNo,
        designation: userData.designation,
        yearsOfExp: userData.yearsOfExp,
      })
      .then((response) => {
        if (response.status === 201){
          setTimeout(() => {
            navigate("/");
          }, 1000);
        setMessage("User Data Created Successfully.....");
        setOpen(true);
        } else{
            setMessage("Something Went Wrong!!!!")
        }
      })
      .catch((err) => console.log(err));
  };

  const submit = (e) => {
    e.preventDefault();
    apiData();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {open ? (
        <Toaster message={message} open={open} handleClose={handleClose} />
      ) : (
        ""
      )}

      <Paper className="paper">
        <Typography
          variant="h4"
          component="h2"
          color={"primary"}
          style={{
            paddingTop: "10px",
            paddingLeft: "30px",
            paddingBottom: "10px",
          }}
        >
          USER FORM
        </Typography>
        <form onSubmit={submit}>
          <FormControl>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="UserName"
                  name="userName"
                  value={userData.userName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Email Id"
                  name="emailId"
                  value={userData.emailId}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Phone No"
                  name="phoneNo"
                  value={userData.phoneNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Designation"
                  name="designation"
                  value={userData.designation}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Years Of Exp"
                  name="yearsOfExp"
                  value={userData.yearsOfExp}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </FormControl>
          <Grid item xs={8}>
            <Button variant="contained" type="submit" className="btn">
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Form;
