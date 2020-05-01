import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  .call{
    display: none;
  }

  @media(max-width: 1200px){
    .call{
      display: flex;
      width: 100%;
      a{
        width: 100%;
        margin: 0;
        justify-content: center;
        font-size: 20px;
      }
    }
  }
`

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
  height: 120px;
  justify-content: space-between;
  align-items: center;

  h3{
    font-size: 1rem;
    text-transform: uppercase;
    color: #003D7A;
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
      font-size: 0.8125rem;
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
  background-color: #003D7A;
  padding: 10px 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-left: 20px;

  span{
    color: #fff;
    display: block;
    margin-left: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }

  &:hover{
    background: #3680A6;
  }
`