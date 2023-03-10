import React, { useEffect } from 'react'
import List from './List'

const Alert = ({type, msg, removeAlert,list}) => {
  useEffect(()=>{
    const timeOut= setTimeout(()=>{
      removeAlert()
    },3000)
  },[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
