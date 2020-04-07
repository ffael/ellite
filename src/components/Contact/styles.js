import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background: #fafafa;
`
export const Info = styled.article`
  display: flex;
  padding: 0 50px;
  flex-direction: column;

  h3{
    text-transform: uppercase;
    color: #333;
    font-size: 1rem;
  }
  address{
    font-style: normal;
  }
  a{
    display: inline-block;
    margin: 10px 0;
    color: #003D7A;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.125rem;
  }
`

export const FormWrapper = styled.article`
  background: #fff;
  padding: 40px 60px;

  form{
    section{
      display: flex;
      label[for="state"]{
        margin-left: 40px;
      }

    }
    display: flex;
    flex-direction: column;
    width: 400px;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(6, 60px);

    textarea{
      resize: none;
    }

    label[for="name"],
    label[for="email"],
    label[for="subject"],
    label[for="message"]{
      margin-bottom: 20px;
      input,
      textarea{
        width: calc(100% - 20px) !important;
      }
    }
    label[for="city"]{
      width: 66%;
      margin-bottom: 20px;
      input{
        width: 100%;
      }
    }

    span{
      display: inline;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.8125rem;
    }

    input,
    textarea{
      padding: 10px;
      border: 0;
      outline: 0;
      border: 1px solid #333;
    }
  }
`

export const SendButton = styled.button`
  background: none;
  outline:none;
  border: none;
  margin-top: 30px;

  span{
    margin-top: 20px;
    cursor: pointer;
    display: inline-block;
    background: #333;
    padding: 20px 40px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    transition: all 0.3s ease;

    &:hover{
      color: #333;
      background: #777;
    }
  }
  `