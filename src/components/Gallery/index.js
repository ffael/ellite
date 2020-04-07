import React , { useEffect } from 'react'

import Carousel from 'nuka-carousel'
import Img from 'gatsby-image'


const Gallery = (props) =>{
  useEffect(()=>{
    if(props.gallery != null){
      document.getElementsByClassName("slider-control-centerright")[0].childNodes[0].innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>'
      
      document.getElementsByClassName("slider-control-centerleft")[0].childNodes[0].innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>'
    }
    
  }, [props.gallery])


  const carouselSettings = {
    autoplay: true,
    width: "100%",
    pauseOnHover: true,
    swiping: true,
    withoutControls: false,
    wrapAround: true,
    slidesToShow: 1,
    transitionMode: "fade",
    speed: 2000
  }


  function handleGallery(settings){
    if(props.gallery === null){
      return
    }else{
      return(
        <section style={{marginTop: 100}}>
          <Carousel {...settings} style={ (props.border === true) ? {borderBottom: "20px solid #FFCB65"} : ""}>
            {props.gallery.map((item)=>{
              return(
                <Img key={item.id} fluid={item.fluid} style={{height:"100%", width: "100%", maxHeight: `${props.maxHeight}px`}}/>
              )
            })}
          </Carousel>
        </section>
      )
    }
  }

  function handleFeaturedImage(){
    if(props.featuredImage === null){
      return
    }
    return (
      <section style={{marginTop: 100}}>
        <Img key={props.featuredImage.id} fluid={props.featuredImage.fluid} style={{height:"100%", width: "100%", maxHeight: `${props.maxHeight}px`}}/>
      </section>
    )
  }

  return(
    <>
      { props.gallery != null ? handleGallery(carouselSettings) : handleFeaturedImage()}
    </>
  )
}

Gallery.defaultProps = {
  message: "Hello",
  maxHeight: 600,
  featuredImage: null,
  gallery: null,
  border: true
}

export default Gallery