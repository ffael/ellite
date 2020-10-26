import React, { useContext } from 'react'
import { PageContext } from '../../context'
import { Container, MainNav, CallButton } from './styles'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { FaRegWindowClose, FaPhone } from 'react-icons/fa'

const MobileNav = () =>{
  const { nav, setNav } = useContext(PageContext)
  const {allContentfulMenu} = useStaticQuery(graphql`
    query{
      allContentfulMenu{
        edges{
          node{
            items
          }
        }
      }
    }
  `)

  return(
    <Container mobile={nav}>
     <MainNav>
       <ul>
        { allContentfulMenu.edges[0].node.items.map((item)=>{
            return(
              <li  key={item} >
                { item === 'Home' ?
                  <Link to='/' activeClassName="active-item">{item}</Link>
                  :
                  <Link to={`/${item.toLowerCase()}`} activeClassName="active-item">{item}</Link>
                  }
              </li>
            )
          })}
       </ul>
     </MainNav>
     <CallButton href="tel:+19789679426" className="box-shadow">
        <FaPhone color={"#fff"} />
        <span>978-967-9426</span>
      </CallButton>
      <button type="button" onClick={()=> { setNav(false) }}>
        <FaRegWindowClose size={30} />
      </button>
    </Container>
  )
}

export default MobileNav