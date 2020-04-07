import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { PageContext } from '../../context'

import { FaArrowLeft, FaLocationArrow, FaCalendar } from 'react-icons/fa'
import { Container, Content, CallForActionBtn } from './styles'

import SocialBar from '../../components/SocialBar'
import Header from '../../components/Header'
import Gallery from '../../components/Gallery'
import GetQuote from '../../components/GetQuote'
import Questions from '../../components/Questions'
import Footer from '../../components/Footer'


import GlobalStyles from '../../styles/global'

export const query = graphql`
  query($slug: String!){
    project: contentfulProject(slug: {eq: $slug}){
      name
      date(formatString: "MM-DD-YYYY")
      locationName
      description {
        description
      }
      gallery {
        fixed(quality: 100){
          ...GatsbyContentfulFixed
        }
        fluid(quality: 100){
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredImage {
        fixed(quality: 100){
          ...GatsbyContentfulFixed
        }
        fluid(quality: 100){
          ...GatsbyContentfulFluid
        }
      }
      slug
    }

    site{
        siteMetadata{
          title
        }
      }
  }
`

const ProjectPage = (props)=>{
  const [nav, setNav] = useState(false)
  return(
    <PageContext.Provider value={ {nav, setNav} }>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{props.data.site.siteMetadata.title}</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet> 
      <GlobalStyles />
      <SocialBar />
      <Header/>
      <Gallery gallery={props.data.project.gallery} featuredImage={props.data.project.featuredImage} maxHeight={600}/>
      <Container className="grid section-xl">
        <Content>
          <Link to="/projects"><FaArrowLeft />Back to Projects</Link>
          <section className="title">
            <h3>{props.data.project.name}</h3>
            <CallForActionBtn>
              <Link to="/contact" className="box-shadow">
                Start Your Project
              </Link>
            </CallForActionBtn>
          </section>
          <section className="info">
            <span><FaLocationArrow />{props.data.project.locationName}</span>
            <span><FaCalendar />{props.data.project.date}</span>
          </section>
          <section className="description">
            <p>{props.data.project.description.description}</p>
          </section>

        </Content>
      </Container>
      <GetQuote />
      <Questions />
      <Footer />
      
    </ PageContext.Provider>
  )
}

export default ProjectPage