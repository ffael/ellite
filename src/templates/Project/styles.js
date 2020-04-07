import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: #fafafa;
  user-select: none;
  padding-bottom: 200px !important;

`

export const Content = styled.article`
  .title{
    display: flex;
    align-content: center;
    justify-content: space-between;
    h3{
      text-transform: uppercase;
      font-size: 3rem;
      margin: 0;
    }
  }
  .info{
    align-content: center;
    justify-content: space-between;
    span{
      margin-right: 30px;
      font-weight: bold;
      text-transform: uppercase;
      svg{
        margin-right: 5px;
      }
    }
  }

  .description{
    line-height: 50px;
  }

  a{
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    text-transform: uppercase;
    font-size: 0.825rem;

    transition: all 0.3s ease;

    &:hover{
      color: #FFCB65;
    }
  
    svg{
      margin-right: 10px;
    }
    
  }
  
`

export const CallForActionBtn = styled.button`
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