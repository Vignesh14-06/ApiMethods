import React from 'react'
import TablePagination from '@mui/material/TablePagination';

const Pagination = (props) => {
  return (
    <TablePagination
    component="div"
    rowsPerPageOptions={props.options}
    count={props.count}
    page={props.page}
    onPageChange={props.handleChangePage}
    rowsPerPage={props.rowsPerPage}
    onRowsPerPageChange={props.handleChangeRowsPerPage}
  />
  )
}

export default Pagination
