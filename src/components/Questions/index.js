import React, { useState } from 'react'

import { Container, Content, CallForActionBtn } from './styles'

import { Parallax } from 'react-parallax'

import { FaBullhorn } from 'react-icons/fa'
import Img from '../../assets/images/questions.jpg'

const Questions = () =>{
  const [name, setName] = useState()

  function onNameChange(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const form = document.getElementById('questionForm')
    alert(`Thanks ${name} your message was sent!`)
    form.reset()
  }

  return(
    <Parallax
      bgImage={Img}
      strength={200}
    >
      <Container>
        <Content className="content">
          <FaBullhorn size={50} fill={"#fff"}/>
          <h3>Any Questions? We are Glad to Help.</h3>
          <form onSubmit={handleSubmit} id="questionForm">
            <input type="text" name="name" id="name" placeholder="Name" onChange={onNameChange.bind(this)} required/>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" name="cityState" id="cityState" placeholder="City / State" />
            <input type="text" name="subject" id="subject" placeholder="Subject"/>
            <textarea name="message" id="message" placeholder="Your Message" ></textarea>
            <CallForActionBtn type="submit" blue>
              <span className="box-shadow">Send</span>
            </CallForActionBtn>
          </form>
        </Content>
      </Container>
    </Parallax>
  )
}

export default Questions