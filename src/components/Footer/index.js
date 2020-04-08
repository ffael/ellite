import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { Container, Content, Card } from './style'
import Logo from '../../assets/images/Logo'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          address,
          email,
          phone
        }
      }
    }
  `)

  return(
    <>
    <Container className="section">
      <Content className="grid">
        <div className="logo-footer">
          <Logo fill={"#fff"} bleed={"#003D7A"}/>
        </div>
        <Card>
          <h3>Working Hours</h3>
          <ul>
            <li>Mon <span><time dateTime="07:00:00">7AM</time> - <time dateTime="18:00:00">6PM</time></span></li>
            <li>Tue <span><time dateTime="07:00:00">7AM</time> - <time dateTime="18:00:00">6PM</time></span></li>
            <li>Wed <span><time dateTime="07:00:00">7AM</time> - <time dateTime="18:00:00">6PM</time></span></li>
            <li>Thu <span><time dateTime="07:00:00">7AM</time> - <time dateTime="18:00:00">6PM</time></span></li>
            <li>Fri <span><time dateTime="07:00:00">7AM</time> - <time dateTime="18:00:00">6PM</time></span></li>
            <li>Sat <span><time dateTime="07:00:00">7AM</time> - <time dateTime="18:00:00">6PM</time></span></li>
          </ul>
        </Card>
        <Card>
          <h3>General Information</h3>
          <p>{data.site.siteMetadata.address}</p>
          <a href={`mailto:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.email}</a>
        </Card>
      </Content>
      <div className="copy-right">©2020 - Ellite Construction - All Rights Reserved.</div>
    </Container>
    </>
  )
}

export default Footer