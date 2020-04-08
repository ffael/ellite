import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background-color:#003D7A;
  color: #fff;
  height: 40px;
  justify-content: flex-end;
  align-items: center;

  ul{
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      margin-left: 15px;
      margin-right: 15px;

      &:last-child{
        margin-right: 0;
      }
    }
    li a{
      color: #fff;

      &:hover{
        color: #3680A6;
      }
    }
  }
  @media(max-width: 500px){
    justify-content: center;
  }
`