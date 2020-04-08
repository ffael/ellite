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
  align-items: center;
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
    font-size: 1.8rem;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li{
      display: flex;
      padding: 10px 40px;
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
  justify-content: center;
  width: 20%;
  color: #fff;
  background-color: #003D7A;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 10px 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;
  margin-bottom: 30px;

  &:hover{
    background: #3680A6;
  }
`