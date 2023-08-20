import React from 'react'
import Header from './components/Header/page'
import { greeting } from './lib/greet';

const Home = () => {
  const greet = greeting();
  return (
    <div>
      <Header value={`${greet} Readers!`}/>
      <h1>Home</h1>
    </div>
  )
}

export default Home