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

  @media(max-width: 900px){
    .title{
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 25px;
      h3{
        font-size: 2.3rem;
        line-height: 2.3rem;
        margin: 10px 0;
      }
    }
    .description{
      line-height: 30px;
    }
  }
  
`

export const CallForActionBtn = styled.button`
  background: none;
  outline:none;
  border: none;

  a{
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

  @media(max-width:900px){
    padding: 0;
    a{
      font-size: 0.825rem;
      padding: 10px 20px;
    }
  }
`