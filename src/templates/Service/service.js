import React from 'react'
import { Link, graphql } from 'gatsby'

import { FaArrowLeft } from 'react-icons/fa'
import { Container, Content, CallForActionBtn } from './styles'
import Gallery from 'react-photo-gallery'

import Layout from '../../layouts/pages'

export const query = graphql`
  query($slug: String!){
    service: contentfulService(slug: {eq: $slug}){
      title
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
      slug
    }

    site{
        siteMetadata{
          title
        }
      }
  }
`
const ServicePage = (props)=>{
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const photos = []
  if(props.data.service.gallery){
    props.data.service.gallery.map((item)=>{
      const { src, width, height } = item.fixed
      photos.push({src, width, height})
    })
  }
  
  const openLightBox = useCallback((event, { photo, index })=>{
    setCurrentImage(index)
    setViewerIsOpen(true)
    console.log(photo)
  }, [])

  const closeLightBox = () =>{
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  
  return(
    <Layout title="Services" fileName="services-hero">   
      <Container className="grid section-xl">
        <Content>
          <Link to="/services"><FaArrowLeft />Back to Services</Link>
          <section className="title">
            <h3>{props.data.service.title}</h3>
            <CallForActionBtn>
              <Link to="/contact" className="box-shadow">
                Start Your Project
              </Link>
            </CallForActionBtn>
          </section>
          <section className="description">
            <p>{props.data.service.description.description}</p>
          </section>
        </Content>
        <Gallery photos={photos} direction={"column"}/>
        {/* { props.data.service.gallery !== null ? 
          <>
            
          </>
        : ''} */}
      </Container>      
    </ Layout>
  )
}

export default ServicePage