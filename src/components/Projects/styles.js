import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background: #fafafa;
  user-select: none;
  justify-content: center;

  h1{
    position: absolute;
    left: 80px;
    margin: 30px 0;
    font-size: 7rem;
    font-style: italic;
    text-transform: uppercase;
    color: #EDEDED;
  }
`

export const Content = styled.article`
  margin-top: 50px;
  display: grid;
  grid-row-gap: 50px;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width:900px){
    display: flex;
    flex-direction: column;
  }
`

export const Card = styled.article`
  margin: 0 20px;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;

  .image{
    background-image: url(${props => props.img});
    background-size:cover;
    background-repeat: no-repeat;
    background-clip: border-box;
    height: 350px;
    overflow: hidden;
    margin-bottom: 10px;
    border-bottom: 10px solid #FFCB65;

    .icon{
      padding: 10px;
      background: #FFCB65;
      position: relative;
      top: calc(350px - 45px);
    }
  }
  .info-wrapper{
    height: 150px;
    overflow: hidden;
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

    .info{
      display: flex;
      align-items: center;
      font-weight: bold;
      width: 100%;
      margin-bottom: 15px;
      
      span{
        font-size: 0.725rem;
        display: inline-block;
        margin-left: 5px;
        margin-right: 30px;
        text-transform: uppercase;
      }
    }

    .brief{
      line-height: 30px;
    }
  }
  @media(max-width:900px){
    margin-bottom: 50px;
  }
  @media(max-width:600px){
    margin-left: 0;
    margin-right: 0;
  }
  @media(max-width:400px){
    .image{
      height: 200px;
    }
    .info-wrapper{
      .info{
        font-size: 11px;
      }
      .brief{
        line-height: 20px;
      }
      margin-bottom: 10px;
    }
  }
`

export const CallForActionBtn = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  a{
    background:#FFCB65;
    padding: 15px 35px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: bold;
    color: #333;
    transition: all 0.3s ease;

    &:hover{
      color: #333;
      background: #777;
    }
  }
`