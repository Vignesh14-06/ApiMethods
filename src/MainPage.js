import { useEffect, useState } from "react";
import "./App.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TableComponent from "./Components/Table/TableComponent";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Toaster from "./Components/Toaster/Toaster.js";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:8001/userDetails")
      .then((value) => {
        setData(value.data)
        setLoading(false)
      })
      .catch((err) => err);
  }, []);
  const viewDetail = (value) => {
    navigate(`/ViewUserData/${value}`);
  };
  const updateDetail = (value) => {
    navigate(`/UpdateUserDetail/${value}`);
  };
  const deleteDetail = (value) => {
    axios.delete(`http://localhost:8001/userDetails/${value}`)
    .then((res)=>{
        if (res.status === 200){
            setTimeout(() => {
              navigate("/");
            }, 1000);
          setMessage("User Data Deleted Successfully.....");
          setOpen(true);
          } else{
              setMessage("Something Went Wrong!!!!")
          }
        })
        .catch((err) => console.log(err));
    const deletedData = data.filter((data) => data.id !== value)
    setData(deletedData)
  };
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const Array = [
    {
      id: "userName",
      numeric: false,
      disablePadding: true,
      label: "UserName",
      width: "20%",
    },
    {
      id: "emaiId",
      numeric: true,
      disablePadding: false,
      label: "EmaiId",
      width: "20%",
    },
    {
      id: "phoneNo",
      numeric: true,
      disablePadding: false,
      label: "PhoneNo",
      width: "15%",
    },
    {
      id: "designation",
      numeric: true,
      disablePadding: false,
      label: "Designation",
      width: "15%",
    },
    {
      id: "yearsOfExp",
      numeric: true,
      disablePadding: false,
      label: "YearsOfExp",
      width: "8%",
    },
    {
      id: "actions",
      numeric: true,
      disablePadding: false,
      label: "Actions",
      width: "30%",
    },
  ];
  return (
    <>
      {open ? (
            <Toaster message={message} open={open} handleClose={handleClose} />
          ) : (
            ""
          )}
      <Paper className="paper">
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Typography variant="h5" color={"primary"} style={{margin:"10px 0px 10px 10px"}}>
          USER DETAILS
        </Typography>
        <Button  style={{margin:"10px 10px 10px"}}variant="contained" onClick={()=>navigate("/Form")}>Add User</Button>
        </div>
        {loading  ? <p style={{fontSize:"25px",marginLeft:"30%"}}>Loading Data....</p> : data.length <= 0 ? <p style={{fontSize:"25px",marginLeft:"30%"}}>No Data Available. Please Create New User Data</p> :
        <><TableComponent
                      rows={Array}
                      data={data}
                      viewDetail={viewDetail}
                      updateDetail={updateDetail}
                      deleteDetail={deleteDetail}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      options={[5, 10, 30, 50]}
                      count={data.length}
                      handleChangePage={handleChangePage}
                      handleChangeRowsPerPage={handleChangeRowsPerPage}
                      />
                      {/* <Pagination
                          page={page}
                          handleChangeRowsPerPage={handleChangeRowsPerPage} /> */}
                          </>}
      </Paper>
    </>
  );
};

export default MainPage;
