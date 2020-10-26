import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { PageContext } from '../context'
import GlobalStyles from '../styles/global'
import Helmet from 'react-helmet'
import MobileNav from '../components/MobileNav'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import GetQuote from '../components/GetQuote'
import Services from '../components/Services'
import Questions from '../components/Questions'
import About from '../components/About'
import Footer from '../components/Footer'

const IndexPage = ({title, main}) =>{
  const [nav, setNav] = useState(false)
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
      contentfulMainHero {
        gallery {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return(
    <>
      <PageContext.Provider value={{title, main, nav, setNav}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <MobileNav />
        <GlobalStyles />
        <div style={{width: '100vw'}}>
        <Header />
          <Gallery gallery={data.contentfulMainHero.gallery} border={false} />
          <GetQuote />
          <Services mainPage={true}/>
          <Questions />
          <About mainPage={true} />
          <Footer />
        </div>
      </PageContext.Provider>
    </>
  )

}

export default IndexPage