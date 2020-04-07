import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { PageContext } from '../context'
import GlobalStyles from '../styles/global'
import Helmet from 'react-helmet'
import MobileNav from '../components/MobileNav'
import Header from '../components/Header'
import HeroPage from '../components/HeroPage'
import Footer from '../components/Footer'

const Layout = ({children, title, main, fileName}) =>{
  const [nav, setNav] = useState(false)
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
  `)

  return(
    <div>
      <PageContext.Provider value={{title, fileName, main, nav, setNav}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <MobileNav />
        <GlobalStyles />
        <Header />
        <HeroPage />
        <main>
          {children}
        </main>
        <Footer />
      </PageContext.Provider>
    </ div>
  )

}

export default Layout