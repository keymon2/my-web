import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './container/Layout/Layout'

// import Home from './router/Home/Home'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
