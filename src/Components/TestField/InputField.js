import React from 'react'
import { TextField } from '@mui/material'
import "./inputField.css"

const InputField = (props) => {
  return (
    <div className='text'>
      <TextField  {...props}/>
    </div>
  )
}

export default InputField
