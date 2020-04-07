import React, {useContext} from 'react'

import { PageContext } from '../../context'

import Logo from '../../assets/images/Logo'
import Social from '../SocialBar'
import { HeaderWrapper, Container, MainNav, CallButton, TrayOpener } from './styles'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { FaAlignRight } from 'react-icons/fa'


const Header = () =>{
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
  const { nav, setNav } = useContext(PageContext)
  return(
    <HeaderWrapper>
      <Social />
      <Container className="grid">
        <Link to="/">
          <Logo className="logo" fill={"#002f7a"} bleed={"#fff"}/>
        </Link>
        <div className="navWrapper">
          <MainNav>
            <ul>
              { allContentfulMenu.edges[0].node.items.map((item)=>{
                return(
                  <li  key={item} >
                    { item === 'Home' ?
                      <Link to='/' activeClassName="active-item">{item}</Link>
                     :
                      <Link to={`${item.toLowerCase()}`} activeClassName="active-item">{item}</Link>
                     }
                  </li>
                )
              })}
            </ul>
          </MainNav>
          <CallButton href="tel:+19785965350" className="box-shadow">Call Us</CallButton>
        </div>
      <TrayOpener>
        <button type="button" onClick={() => { setNav(!nav) }}>
          <FaAlignRight size={20} color={"#333"}/>
        </button>
      </TrayOpener>
      </Container>
    </HeaderWrapper>
  )
}

export default Header