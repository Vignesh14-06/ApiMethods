import { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";




const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


const Toaster = ({message,open,handleClose}) => {

    return (
       <>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}   anchorOrigin={{ vertical:"top", horizontal:"center" }}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        </>
    );
};

export default Toaster;
