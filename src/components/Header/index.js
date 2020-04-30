import React, {useContext} from 'react'

import { PageContext } from '../../context'

import Logo from '../../assets/images/Logo'
import Social from '../SocialBar'
import { HeaderWrapper, Container, MainNav, CallButton, TrayOpener } from './styles'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { FaAlignRight, FaPhone} from 'react-icons/fa'


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
          <Logo width={250} height={120} className="logo" fill={"#002f7a"} bleed={"#fff"}/>
        </Link>
        {/* <h3>General Masonry</h3> */}
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
          <CallButton href="tel:+19789679426" className="box-shadow">
            <FaPhone color={"#fff"} />
            <span>978-967-9426</span>
          </CallButton>
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