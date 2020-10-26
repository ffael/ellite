import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { Container, Content, Card, CallForActionBtn, Button } from './styles'
import { FaHardHat } from 'react-icons/fa'

import { Link } from 'gatsby'

const Services = ({mainPage = true}) =>{
  const data = useStaticQuery(graphql`
    query First{
      homePage: allContentfulService(limit: 3) {
        edges {
          node {
            id
            title
            brief
            slug
            image {
              file {
                url
              }
            }
          }
        }
      }
      servicesPage: allContentfulService{
        edges{
          node{
            id
            title
            slug
            description{
              description
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return(
    <Container>
      {/* {mainPage ? <h1>Services</h1>: ""} */}
      <Content className="grid section-xl" mainPage={mainPage}>
        { mainPage ? 
        data.homePage.edges.map((edge)=>{
          return(
            <Card key={edge.node.id} img={edge.node.image.file.url}>
              <div>
                <FaHardHat className="icon" size={25} fill="#CCA352"/>
              </div>
              <h3>{edge.node.title}</h3>
              <p>{edge.node.brief}</p>
              <Button>
                <Link className="box-shadow" to={`/services/${edge.node.slug}`}>See More</Link>
              </Button>
            </Card>
          )  
        }) : 
        data.servicesPage.edges.map((edge)=>{
          return(
            <Card key={edge.node.id} img={edge.node.image.file.url}>
              <div>
                {/* <FaHardHat className="icon" size={25} fill="#CCA352"/> */}
              </div>
              <h3>{edge.node.title}</h3>
              <p>{edge.node.description.description}</p>
              <Button>
                <Link className="box-shadow" to={`/services/${edge.node.slug}`}>See More</Link>
              </Button>
            </Card>
          )  
        })
        }        
        {mainPage ?
          <CallForActionBtn>
            <Link className="box-shadow" to="/services">All Services</Link>
          </CallForActionBtn>
        :""}
      </Content>

    </Container>
  )
}

export default Services