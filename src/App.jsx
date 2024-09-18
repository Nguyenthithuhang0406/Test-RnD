/* eslint-disable */
import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './components/home/Home'
import Preview from './components/preview/Preview'

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/preview',
      element: <Preview />
    }
  ]);

  return (
    <>
      {routes}
    </>
  )
}

export default App;
