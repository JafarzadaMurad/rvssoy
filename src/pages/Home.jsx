import React from 'react'
import Main from '../layouts/Main'
import Banner from '../components/Banner'
import About from '../components/About'
import Service from '../components/Services'

function Home() {
  return (
    <Main>
        <Banner/>
        <About/>
        <Service/>
    </Main>
  )
}

export default Home