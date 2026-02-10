import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import {FaFacebookSquare, FaInstagram, FaThumbtack, FaLink, FaGoogle} from 'react-icons/fa'
import { Container } from './styles'

const SocialBar = () =>{
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          facebook,
          messenger,
          google,
          thumbtack,
          instagram
        }
      }
    }
  `)
  return(
    <Container className="grid">
      <ul role="navigation" aria-label="External Links">
        <li>
          <a href={data.site.siteMetadata.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href={data.site.siteMetadata.google} target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </a>
        </li>
        <li>
          <a href={data.site.siteMetadata.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href={data.site.siteMetadata.thumbtack} target="_blank" rel="noopener noreferrer">
            <FaThumbtack />
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default SocialBar