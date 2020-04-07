import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background-image: url(${props => props.img});
  background-size: cover;
  height: 70vh;
  position: relative;

  @media(max-width: 700px){
    height: 85vh;
  }
`

export const Content = styled.article`
  display: flex;
  background: rgba(0,0,0,0.3);
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  h3{
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
  }

  form{
    display: grid;
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 40px) 60px;
    grid-gap: 10px;

    input,
    textarea{
      padding: 10px;
      border: 0;
      outline: 0;
    }
    input[name="email"]{
      grid-column: 1;
    }
    input[name="subject"]{
      grid-row: 1;
      grid-column: 2;
    }

    textarea{
      grid-row-start:2;
      grid-row-end:4;
      grid-column:2;
      resize: none;

    }
  }

  @media(max-width: 820px){
    h3{
      font-size: 1.5rem;
      text-align: center;
    }
    form{
      width: 100%;
    }
  }

  @media(max-width: 700px){
    form{
      display: flex;
      flex-direction: column;

      input{
        margin-bottom: 10px;
      }
      textarea{
        height: 80px;
      }
    }
  }
`

export const CallForActionBtn = styled.button`
  grid-column-start:1;
  grid-column-end: 3;
  background: none;
  outline:none;
  border: none;

  span{
    margin-top: 20px;
    cursor: pointer;
    display: inline-block;
    background: ${props => props.blue ? '#003D7A':'#FFCB65'};
    padding: 20px 40px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.blue ? '#fff': '#333'};
    transition: all 0.3s ease;

    &:hover{
      color: #333;
      background: #777;
    }
  }
`