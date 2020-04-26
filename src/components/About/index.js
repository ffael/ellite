import React from 'react'
import { Container, Content, Card, CallForActionBtn } from './styles'
import { useStaticQuery, graphql, Link } from 'gatsby'

const About = ({mainPage = true}) =>{
  const data = useStaticQuery(graphql`
    query{
      contentfulAbout{
        description{
          description
        }
      }
      contentfulAsset(title: {eq: "about-featured"}) {
        fluid {
          src
        }
      }
    }
  `)

  return(
    <Container>
      {/* {mainPage ? <h1>About</h1>: ""} */}
      <Content className="grid section-xl">
        <Card img={data.contentfulAsset.fluid.src}>
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