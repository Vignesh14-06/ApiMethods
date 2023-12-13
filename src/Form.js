import React, { useEffect, useState } from "react";
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
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const [issubmit, setIsSubmit] = useState(false);
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
        if (response.status === 201) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
          setMessage("User Data Created Successfully.....");
          setOpen(true);
        } else {
          setMessage("Something Went Wrong!!!!");
        }
      })
      .catch((err) => console.log(err));
  };

  const errorValidate = (value) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const yearsRegex = /^[0-9]{1,2}$/i;
    if (!value.userName) {
      errors.userName = "UserName Field is Mandatory";
    } else if (value.userName.length > 21) {
      errors.userName = "20 Characters are only Allowed";
    } else if (value.userName.length <= 2) {
      errors.userName = "UserName is very Short. Please enter your Full Name";
    }
    if (!value.emailId) {
      errors.emailId = "emailId Field is Mandatory";
    } else if (!emailRegex.test(value.emailId)) {
      errors.emailId = "Please enter a valid Email";
    }
    if (!value.phoneNo) {
      errors.phoneNo = "PhoneNumber Field is Mandatory";
    } else if (value.phoneNo.length > 10) {
      errors.phoneNo = "Please enter a valid Phone Number";
    } else if (value.phoneNo.length < 10) {
      errors.phoneNo = "Please enter a valid Phone Number";
    }
    if (!value.designation) {
      errors.designation = "Designation Field is Mandatory";
    } else if (value.designation.length > 21) {
      errors.designation = "20 Characters are only Allowed";
    } else if (value.designation.length <= 2) {
      errors.designation =
        "Designation is very Short. Please enter your Full Designation Name";
    }
    if (!value.yearsOfExp) {
      errors.yearsOfExp = "Years Of Experience Field is Mandatory";
    } else if (!yearsRegex.test(value.yearsOfExp)) {
      errors.yearsOfExp = "Please enter your valid Work Experience";
    }

    return errors;
  };

  const submit = (e) => {
    e.preventDefault();
    setError(errorValidate(userData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && issubmit) {
      apiData();
    }
  }, [error]);

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
          Create User Detail
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
                <p
                  style={{
                    fontSize: "18px",
                    color: "red",
                    fontWeight: 400,
                    marginLeft: "40px",
                  }}
                >
                  {error.userName}
                </p>
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Email Id"
                  name="emailId"
                  value={userData.emailId}
                  onChange={handleChange}
                />
                <p
                  style={{
                    fontSize: "18px",
                    color: "red",
                    fontWeight: 400,
                    marginLeft: "40px",
                  }}
                >
                  {error.emailId}
                </p>
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Phone No"
                  name="phoneNo"
                  value={userData.phoneNo}
                  onChange={handleChange}
                />
                <p
                  style={{
                    fontSize: "18px",
                    color: "red",
                    fontWeight: 400,
                    marginLeft: "40px",
                  }}
                >
                  {error.phoneNo}
                </p>
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Designation"
                  name="designation"
                  value={userData.designation}
                  onChange={handleChange}
                />
                <p
                  style={{
                    fontSize: "18px",
                    color: "red",
                    fontWeight: 400,
                    marginLeft: "40px",
                  }}
                >
                  {error.designation}
                </p>
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Years Of Exp"
                  name="yearsOfExp"
                  value={userData.yearsOfExp}
                  onChange={handleChange}
                />
                <p
                  style={{
                    fontSize: "18px",
                    color: "red",
                    fontWeight: 400,
                    marginLeft: "40px",
                  }}
                >
                  {error.yearsOfExp}
                </p>
              </Grid>
            </Grid>
          </FormControl>
          <div style={{display:"flex",flexDirection:"row",gap:"6px",marginLeft:"63%"}}>
          <Grid item xs={8}>
            <Button variant="contained" type="submit" className="btn">
              Submit
            </Button>
          </Grid>
          <Grid item xs={8}>
          <Button variant="contained" onClick={()=>navigate("/")} className="btn">
                  Back
                </Button>
              </Grid>
              </div>
        </form>
      </Paper>
    </>
  );
};

export default Form;
