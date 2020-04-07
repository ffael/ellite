import styled from 'styled-components'

export const Container = styled.section`
  position: fixed;
  z-index: 111;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  width: 100%;
  height: 100vh;
  top:0;
  right: ${props => props.mobile ? "0": "-100%"};
  transition: all 0.5s ease-in;
  justify-content: center;
  button{
    background: none;
    outline: 0;
    border: none;
    cursor: pointer;
    &:hover{
      svg{
        fill: #003D7A;
      }
    }
  }
`
export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  ul{ 
    flex-direction: column;
    font-size: 2rem;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li{
      display: flex;
      padding: 20px 40px;
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