import React, { useState,useEffect } from "react";
import "./App.css";
import InputField from "./Components/TestField/InputField";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useParams,useNavigate } from "react-router-dom";

const ViewUserData = () => {
    const [data, setData] = useState({
        userName: "",
        emailId: "",
        phoneNo: "",
        designation: "",
        yearsOfExp: "",
    });
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios
          .get(`http://localhost:8001/userDetails/${id}`)
          .then((res)=>setData({...data,userName:res.data.userName,emailId:res.data.emailId,phoneNo:res.data.phoneNo,designation:res.data.designation,yearsOfExp:res.data.yearsOfExp})
          )
          .catch((err) => err);
      },[]);
  return (
    <>
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
        <form >
          <FormControl>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="UserName"
                  name="userName"
                  value={data.userName}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Email Id"
                  name="emaiId"
                  value={data.emailId}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Phone No"
                  name="phoneNo"
                  value={data.phoneNo}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Designation"
                  name="designation"
                  value={data.designation}
                />
              </Grid>
              <Grid item xs={4}>
                <InputField
                  style={{ width: "100%", display: "flex", gap: "4px" }}
                  label="Years Of Exp"
                  name="yearsOfExp"
                  value={data.yearsOfExp}
                />
              </Grid>
            </Grid>
          </FormControl>
          <Grid item xs={8}>
            <Button variant="contained" onClick={()=>{navigate("/")}} className="btn">
              Back
            </Button>
          </Grid>
        </form>
      </Paper>
    </>
  )
}

export default ViewUserData
