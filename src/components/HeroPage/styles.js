import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 150px;
  width: 100vw;
  @media (max-width: 1200px){
    margin-top: 200px;
  }
`

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  background-image: url(${props=>props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  @media(max-width: 1000px){
    height: 300px;
  }
`

export const Content = styled.article`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  color: #fff;
  justify-content: center;
  align-items: center;

  h3{
    font-size: 5rem;
    text-transform: uppercase;
    border-right: 2px solid #FFCB65;
    padding-right: 40px;
    margin-right: 40px;
  }
  p{
    font-size: 1.5rem;
  }

  @media(max-width: 1000px){
    flex-direction: column;
    h3{
      font-size: 4rem;
      margin: 0;
      padding: 0;
      border-right: 0;
      border-bottom: 2px solid #FFCB65;
    }
    p{
      text-align: center;
      font-size: 1rem;
    }
  }
  @media(max-width: 400px){
    h3{
      font-size: 2.5rem;
    }
    p{
      font-size: 0.925rem;
    }
  }
`