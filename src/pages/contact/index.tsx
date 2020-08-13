import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Heading from 'components/Heading'
import { useService } from 'services/api'
import './style.scss'

const Contact = () => {
  const dispatch = useDispatch()
  const sendEmail = useService(dispatch)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const getTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const getContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendEmail(name, title, content)
    //window.location.reload()
  }

  return (
    <div className="contact">
      <Heading title="Contact me" type="colorful" />
      <div className="form">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" onChange={getName} />
          <br />
          <label htmlFor="title">Title:</label>
          <br />
          <input type="text" id="title" name="title" onChange={getTitle} />
          <br />
          <label htmlFor="content">Content:</label>
          <br />
          <textarea id="content" name="content" onChange={getContent} />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
