import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background: #003D7A;
  border-top: 40px solid #333;
  height: 40vh;
  user-select: none;

  .copy-right{
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 0.8125rem;
    padding: 10px 0;
  }
`

export const Content = styled.article`
  display:grid;
  height: 100%;
  grid-column-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  color: #fff;
  
  ul{
    padding: 0;
    margin-top: 10px;
    margin-bottom: 0;
    list-style: none;

    li{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border-bottom: 1px solid rgba(255,255,255,0.2);
      padding: 3px 0;

      span{
        text-align: right;
      }
    }
  }

  h3{
    font-size: 1.5rem;
    margin: 0;
    text-transform: uppercase;
    padding-bottom: 10px;
    border-bottom: 5px solid #FFCB65;
  }
  p{
    margin-top: 10px;
    user-select: text;
  }

  a{
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
`