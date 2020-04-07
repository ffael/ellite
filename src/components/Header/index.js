import React, {useContext} from 'react'

import { PageContext } from '../../context'

import Logo from '../../assets/images/Logo'
import Social from '../SocialBar'
import { HeaderWrapper, Container, MainNav, CallButton, TrayOpener } from './styles'
import { Link } from 'gatsby'

import { FaAlignRight } from 'react-icons/fa'

const Header = () =>{
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
              <li>
                <Link to='/' activeClassName="active-item">Home</Link>
              </li>
              <li>
                <Link to='/about' activeClassName="active-item">About Us</Link>
              </li>
              <li>
                <Link to='/services' activeClassName="active-item">Services</Link>
              </li>
              <li>
                <Link to='/projects' activeClassName="active-item">Projects</Link>
              </li>
              <li>
                <Link to='/contact' activeClassName="active-item">Contact</Link>
              </li>
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