import styled from 'styled-components'

export const TrayOpener = styled.section`
  display: none;
  button{
    width: 100%;
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
  @media(max-width: 1200px){
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const Container = styled.section`
  user-select: none;
  background: #fff;
  display: flex;
  height: 100px;
  justify-content: space-between;
  @media(max-width: 1200px){
    align-items: center;
  }

  .navWrapper{
    display: flex;
    align-items: center;
    justify-items: center;

    @media(max-width: 1200px){
      display: none;
    }
  }
`

export const MainNav = styled.nav`
  display: flex;
  color: #333;
  font-size: 0.875rem;

  ul{ 
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li{
      display: flex;
      padding: 0 40px;
    }

    a{
      text-decoration: none;
      color: inherit;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;

      &:hover{
        color: #003D7A;
      }
    }
  }
`

export const CallButton = styled.a`
  display: flex;
  color: #fff;
  background-color: #003D7A;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 10px 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover{
    background: #3680A6;
  }
`