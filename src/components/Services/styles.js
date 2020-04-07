import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background: #fafafa;
  user-select: none;

  h1{
    position: absolute;
    left: 80px;
    margin: 30px 0;
    font-size: 7rem;
    font-style: italic;
    text-transform: uppercase;
    color: #EDEDED;
  }
`

export const Content = styled.article`
  margin-top: 50px;
  display: grid;
  grid-template-rows: ${props => props.mainPage ? "1fr 250px" : ""};
  ${props=> props.mainPage !== true ? `grid-row-gap: 40px` : ""};
  grid-template-columns: ${props => props.mainPage ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
`

export const Card = styled.article`
  margin: 0 20px;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  div{
    background-image: url(${props => props.img});
    background-size:cover;
    background-repeat: no-repeat;
    background-clip: border-box;
    height: 350px;
    margin-bottom: 10px;
    border-bottom: 10px solid #FFCB65;

    .icon{
      padding: 10px;
      background: #FFCB65;
      position: relative;
      top: calc(350px - 45px);
    }
  }

  h3{
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    margin: 10px 0;
  }

  p{
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const CallForActionBtn = styled.button`
  grid-column: 2;
  background: none;
  outline:none;
  border: none;

  a{
    display: inline-block;
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