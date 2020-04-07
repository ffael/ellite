import React from 'react'

import { Container, Content, CallButton } from './styles'
import { Link } from 'gatsby'

const GetQuote = () =>{
  return(
    <Container>
      <Content className="grid">
        <p>Fast and Reliable Services You Can Trust.</p>
        <CallButton className="box-shadow">
          <Link to='/'>Get a Quote</Link>
        </CallButton>
      </Content>
    </Container>
  )
}

export default GetQuote