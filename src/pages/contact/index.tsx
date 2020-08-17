import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Heading from 'components/Heading'
import Button from 'components/Button'
import Description from 'components/Description'
import Input from 'components/Input'
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
  }

  return (
    <div className="contact">
      <Heading title="Contact me" type="colorful" />
      <div className="form">
        <form onSubmit={onSubmit}>
          <Input label="Name" type="text" onChangeText={getName} />
          <Input label="Title" type="text" onChangeText={getTitle} />
          <Input label="Content" type="textarea" onChangeArea={getContent} />
          <Button label="send" handleButton={() => onSubmit} type="small" />
          <Description
            text="(Please wait a few seconds for the message 
          to be sent. You will receive a notification on top of the page.)"
            type="left"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact
