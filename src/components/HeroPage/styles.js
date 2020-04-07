import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  background-image: url(${props=>props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
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
`