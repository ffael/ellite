import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background: #fafafa;
  user-select: none;
  overflow: hidden !important;

  h1{
    position: absolute;
    left: 80px;
    margin: 30px 0;
    font-size: 7rem;
    font-style: italic;
    text-transform: uppercase;
    color: #EDEDED;

    @media(max-width: 950px){
      font-size: 20vw;
      left: 10px;
    }
  }
`

export const Content = styled.article`
  margin-top: 50px;
  display: grid;
  grid-template-rows: ${props => props.mainPage ? "1fr 250px" : ""};
  ${props=> props.mainPage !== true ? `grid-row-gap: 40px` : ""};
  grid-template-columns: ${props => props.mainPage ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  
  @media(max-width: 950px){
    display: inline-block;
    text-align: center;
  }
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

  @media(max-width: 1500px){
    div{
      height: 300px;
      .icon{
        top: calc(300px - 45px);
      }
    }
  }
  @media(max-width: 1200px){
    div{
      height: 200px;
      .icon{
       top: calc(200px - 45px);
      }
    }    
  }
  @media(max-width: 950px){
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 50px;
    div{
      .icon{
        display: none;
      }
    }
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
export const Button = styled(CallForActionBtn)`
  margin: 20px 0;
  a{
    font-size: 0.75rem;
    padding: 10px 20px;
  }
`