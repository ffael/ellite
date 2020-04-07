import React from 'react'

import Layout from '../layouts/pages'
import Services from '../components/Services'

const ServicePage = () =>{
  return(
    <Layout title="Services" fileName="services-hero">
      <Services mainPage={false} />
    </Layout>
  )
}

export default ServicePage