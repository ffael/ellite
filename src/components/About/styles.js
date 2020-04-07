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
  }
`

export const Content = styled.article`
  margin-top: 50px;
  display: grid;
  grid-column-gap: 50px;
  grid-template-rows: 1fr 250px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  div{
    grid-column-start: 2;
    grid-column-end: 4;

    p{
      line-height: 50px;
      margin: 0;
    }
  }
`

export const Card = styled.article`
  margin: 0 20px;
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
`