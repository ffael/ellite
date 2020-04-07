import React from 'react'

import Layout from '../layouts/pages'
import About from '../components/About'

const AboutPage = () =>{
  return(
    <Layout title={"About"} fileName="about-hero">
      <About mainPage={false} />
    </Layout>
  )
}

export default AboutPage