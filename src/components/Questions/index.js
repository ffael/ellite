import React, { useState } from 'react'
import axios from 'axios'

import { Container, Content, CallForActionBtn } from './styles'

import { Parallax } from 'react-parallax'

import { FaBullhorn } from 'react-icons/fa'
import Img from '../../assets/images/questions.jpg'

const Questions = () =>{
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [location, setLocation] = useState()
  const [message, setMessage] = useState()

  function onNameChange(e){
    setName(e.target.value)
  }
  function onEmailChange(e){
    setEmail(e.target.value)
  }
  function onSubjectChange(e){
    setSubject(e.target.value)
  }
  function onLocationChange(e){
    setLocation(e.target.value)
  }
  function onMessageChange(e){
    setMessage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const form = document.getElementById('questionForm')
    const formContent = {
      name,
      email,
      subject,
      location,
      message
    }
    console.log(formContent)
    axios.post('https://tribe-email-sender.herokuapp.com/ellite', { formContent })
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
            <input type="email" name="email" id="email" placeholder="Email" onChange={onEmailChange.bind(this)}/>
            <input type="text" name="cityState" id="cityState" placeholder="City / State" onChange={onLocationChange.bind(this)}/>
            <input type="text" name="subject" id="subject" placeholder="Subject" onChange={onSubjectChange.bind(this)}/>
            <textarea name="message" id="message" placeholder="Your Message" onChange={onMessageChange.bind(this)}></textarea>
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