import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  .react-images__footer__caption{
    display: none !important;
  }
  
  /* Carousel Controllers */
  .slider-control-centerleft,
  .slider-control-centerright{
    svg{
      width: 15px;
    }
    button{
      padding: 20px !important;
      background: #333 !important;

      &:hover{
        background: #FFCB65 !important;
      }
    }
  }
  .slider-control-bottomcenter{
    
  }

  /* ============================== */
  
  .active-item{
    color: #003C7A !important;
    border-bottom: 2px solid #003C7A;
  }
  
  .box-shadow{
    box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
  }

  /* .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
  } */
  .grid{
    padding-left: calc(5% + 1rem);
    padding-right: calc(5% + 1rem);

    /* @media(max-width: 700px){
      padding-left: 1%;
      padding-right: 1%;
    } */
  }
  .content{
    padding-left: calc(8% + 1rem);
    padding-right: calc(8% + 1rem);
  }
  .section {
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
  }
  .section-xl{
    padding-top: 4.875rem;
    padding-bottom: 4.875rem;
  }
  *{
    font-family: 'Open Sans', sans-serif;
  }
  html{
    box-sizing: border-box;
    color: #333;
  }

  body{
    margin: 0;
    padding: 0;
    border: 0;
    max-width: 1600px;
  }

`