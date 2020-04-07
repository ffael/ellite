import styled from 'styled-components'

export const Container = styled.section`
  user-select: none;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  background-color: #003D7A;
  border-top: 10px solid #FFCB65;
  
  @media(max-width: 750px){
    height: 180px;
  }
`

export const Content = styled.article`
  display: flex;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @media(max-width: 1200px){
    text-align: center;
    font-size: 1rem;
  }
  @media(max-width: 750px){
    p{
      margin-top: 0;
    }
    flex-direction: column;
  }
`

export const CallButton = styled.div`
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    background: #333;
    padding: 0 40px;
    height: inherit;
    transition: all 0.3s ease;

    &:hover{
      color: #333;
      background: #777;
    }
  }
  @media(max-width: 750px){
    a{
      padding: 0 20px;
      font-size: 11px;
    }
  }
  height: 50px;
`