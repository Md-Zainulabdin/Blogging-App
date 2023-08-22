import React from 'react'
import Header from './components/Header/page'
import { greeting } from './lib/greet';
import AllBlogs from './components/AllBlogs/page';
import { styles } from './lib/style';

const Home = () => {
  const greet = greeting();
  return (
    <div>
      <Header value={`${greet} Readers!`} />
      <div className={`${styles.paddingX}`}>
        <AllBlogs />
      </div>
    </div>
  )
}

export default Home