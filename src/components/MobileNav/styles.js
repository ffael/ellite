import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background: #fafafa;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  top:0;
  right: 0;
  display: ${props => props.disabled ? "none": ""};
  transition: all 0.5s ease-in;
`