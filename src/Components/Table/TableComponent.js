import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Pagination from "../Pagination/Pagination";

const TableComponent = ({
  rows,
  data,
  viewDetail,
  page,
  rowsPerPage,
  updateDetail,
  deleteDetail,
  handleChangeRowsPerPage,
  handleChangePage,
}) => {
  return (
    <><TableContainer component={Paper}>
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
                  {data
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((headCell) => (
                          <TableRow>
                              <TableCell width={headCell.width}>
                                  {headCell.userName}
                              </TableCell>
                              <TableCell width={headCell.width}>{headCell.emailId}</TableCell>
                              <TableCell width={headCell.width}>{headCell.phoneNo}</TableCell>
                              <TableCell width={headCell.width}>
                                  {headCell.designation}
                              </TableCell>
                              <TableCell width={headCell.width}>
                                  {`${headCell.yearsOfExp} yrs`}
                              </TableCell>
                              <TableCell width={headCell.width}>
                                  <Button
                                      variant="contained"
                                      style={{ fontSize: "9px" }}
                                      onClick={() => {
                                          viewDetail(headCell.id);
                                      } }
                                  >
                                      View Detail
                                  </Button>{" "}
                                  <Button
                                      style={{ fontSize: "9px" }}
                                      variant="contained"
                                      onClick={() => updateDetail(headCell.id)}
                                  >
                                      Update Detail
                                  </Button>{" "}
                                  <Button
                                      style={{ fontSize: "9px" }}
                                      variant="contained"
                                      onClick={() => deleteDetail(headCell.id)}
                                  >
                                      Delete
                                  </Button>
                              </TableCell>
                          </TableRow>
                      ))}
              </TableBody>
          </Table>
          <Pagination
                          options={[5, 10, 30, 50]}
                          count={data.length}
                          page={page}
                          handleChangePage={handleChangePage}
                          rowsPerPage={rowsPerPage}
                          handleChangeRowsPerPage={handleChangeRowsPerPage} />
      </TableContainer>
     
      </>


  );
};

export default TableComponent;
