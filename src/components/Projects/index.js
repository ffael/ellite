import React from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'

import { Container, Content, Card, CallForActionBtn } from './styles'
import { FaLocationArrow, FaCalendar } from 'react-icons/fa'

const Projects = () =>{
  const data = useStaticQuery(graphql`
    query{
      projects: allContentfulProject(sort: {fields: date, order: DESC}){
        edges{
          node{
            id
            name
            slug
            featuredImage {
              file {
                url
              }
            }
            locationName
            date(formatString: "MM-DD-YYYY")
            brief{
              brief
            }
          }
        }
      }
    }
  `)

  return(
    <Container>
      <Content className="grid section-xl">
        {data.projects.edges.map((edge) => {
          return(
            <Card img={edge.node.featuredImage.file.url} key={edge.node.id}>
              <div className="image">
                {/* <FaHardHat className="icon" size={25} fill="#CCA352"/> */}
              </div>
              <div className="info-wrapper">
                <h3>{edge.node.name}</h3>
                <p className="info">
                  <FaLocationArrow /><span>{edge.node.locationName}</span>
                  <FaCalendar /><span>{edge.node.date}</span>
                </p>
                <p className="brief">{edge.node.brief.brief}</p>
              </div>
              <CallForActionBtn>
                <Link to={`/projects/${edge.node.slug}`} className="box-shadow">See More</Link>
              </CallForActionBtn>
            </Card>
          )
        })}
      </Content>

    </Container>
  )
}

export default Projects