import React, { useContext, useEffect } from 'react'
import { PageContext } from '../../context'
import { Container } from './styles'

const MobileNav = () =>{
  const { nav, setNav, disabled } = useContext(PageContext)
 
  let open = nav
  useEffect(()=>{
    open = nav
  }, [nav])

  function closeNav(){
    setNav(!nav)
    setTimeout(()=>{
      // alert("Should be display:none!")
    }, 1000)
  }

  return(
    <Container mobile={open} disabled={disabled}>
      Mobile Nav
      <h1 onClick={()=> {closeNav();}}>Close</h1>
    </Container>
  )
}

export default MobileNav