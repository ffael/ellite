import React from 'react'

import { Container, Content, Card, CallForActionBtn } from './styles'

import { useStaticQuery, graphql, Link } from 'gatsby'

import Img from '../../assets/images/about.jpg'

const About = ({mainPage = true}) =>{
  const data = useStaticQuery(graphql`
    query{
      contentfulAbout{
        description{
          description
        }
      }
    }
  `)

  return(
    <Container>
      {mainPage ? <h1>About</h1>: ""}
      <Content className="grid section-xl">
        <Card img={Img}>
          {/* Image */}
          <picture></picture> 
        </Card>
        <div>
          <p>{data.contentfulAbout.description.description}</p>
          { mainPage ?
            <CallForActionBtn>
              <Link className="box-shadow" to='/about'>Get to Know Us</Link>
            </CallForActionBtn>
            : ""
          }
        </div>
      </Content>
    </Container>
  )
}

export default About