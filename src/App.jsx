import React from 'react'
import Header from './components/header';
import Counter from './components/counter';
import './App.css'

const App = () => {
  return (
    <>
      <Header title="Word Count" subtitle="Enter the sentence and count the number of characters and words" />
      <Counter />
    </>
  )
}

export default App