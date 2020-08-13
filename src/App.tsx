import React from 'react'

import AppBar from 'components/AppBar'
import Footer from 'components/Footer'
import Alert from 'components/Alert'
import Routes from './Routes'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer'
import './App.scss'

function App() {
  const { message, type } = useSelector((state: RootState) => ({
    message: state.notification.message,
    type: state.notification.type,
  }))

  return (
    <>
      <AppBar />
      <Alert toggleAlert={message ? true : false} text={message} type={type} />
      <Routes />
      <Footer />
    </>
  )
}

export default App
