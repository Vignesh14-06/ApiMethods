import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = ({ rows, data, viewDetail,page,rowsPerPage,updateDetail,deleteDetail }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {rows.map((headCell) => (
              <TableCell key={headCell.id} width={headCell.width}>
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage).map((headCell) => (
            <TableRow>
              <TableCell width={headCell.width}>{headCell.userName}</TableCell>
              <TableCell width={headCell.width}>{headCell.emailId}</TableCell>
              <TableCell width={headCell.width}>{headCell.phoneNo}</TableCell>
              <TableCell width={headCell.width}>
                {headCell.designation}
              </TableCell>
              <TableCell width={headCell.width}>
                {`${headCell.yearsOfExp} yrs`}
              </TableCell>
                <TableCell width={headCell.width}><button onClick={()=>{viewDetail(headCell.id)}}>View Detail</button> <button onClick={()=>updateDetail(headCell.id)}>Update Detail</button> <button onClick={()=>deleteDetail(headCell.id)}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
