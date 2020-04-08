import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background: #fafafa;

  h1{
    position: absolute;
    left: 80px;
    margin: 30px 0;
    font-size: 7rem;
    font-style: italic;
    text-transform: uppercase;
    color: #EDEDED;
    user-select: none;

    @media(max-width: 950px){
      font-size: 20vw;
      left: 10px;
    }
  }
`

export const Content = styled.article`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  div{
    background: #fafafa;
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    p{
      line-height: 30px;
      margin: 0 0 50px 0;
    }
  }
  @media(max-width:1000px){
    flex-direction: column;
  }
`

export const Card = styled.article`
  padding: 20px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  picture{
    background-image: url(${props => props.img});
    background-size:cover;
    background-repeat: no-repeat;
    background-clip: border-box;
    height: 400px;
    width: 400px;
    margin-bottom: 10px;
    border-bottom: 10px solid #FFCB65;
  }

  @media(max-width: 1100px){
    picture{
      width: 300px;
    }
  }
  @media(max-width: 1000px){
    picture{
      height: 300px;
    }
  }
  @media(max-width: 400px){
    picture{
      width: 200px;
      height: 200px;
    }
  }
`

export const CallForActionBtn = styled.button`
  grid-column: 2;
  background: none;
  outline:none;
  border: none;
  /* display: ${props => props.visible ? "block": "none"}; */

  a{
    /* display: ${props => props.visible ? "inline-block": "none"}; */
    background:#FFCB65;
    padding: 20px 40px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;

    &:hover{
      color: #333;
      background: #777;
    }
  }

  @media(max-width: 400px){
    a{
     font-size: 0.6875rem;
     padding: 15px 35px;
    }
  }
`