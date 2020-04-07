import React, { useContext } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { PageContext } from '../../context'

import { Parallax } from 'react-parallax'

import { Container, Content } from './styles'

const HeroPage = () =>{
  const context = useContext(PageContext)
  let bg
  const data = useStaticQuery(graphql`
    query{
      allContentfulAsset{
        edges{
          node{
            title
            fluid(maxWidth: 2000){
              src
            }
          }
        }
      }
    }
  `)

  data.allContentfulAsset.edges.map((edge)=>{
    if(edge.node.title !== context.fileName){
      return bg
    }else{
      return(
        bg = edge.node.fluid.src
      )
    }
  })

  return(
    <Parallax
      blur={2}
      bgImage={bg}
      strength={500}
    >
      <Container>
        <Content className="grid">
        <h3 onClick={()=> {console.log(context)}}>{context.title}</h3>
        <p>Delivering results every phase of the project.</p>
        </Content>
      </Container>
    </Parallax>
  )
}

export default HeroPage