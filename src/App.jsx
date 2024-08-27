/* eslint-disable */
import React from 'react'
import Home from './components/home/Home'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Home />
    </DndProvider>
  )
}

export default App;
