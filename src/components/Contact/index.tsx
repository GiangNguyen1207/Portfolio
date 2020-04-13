import React from 'react'

import './style.scss'

const Contact = () => {
  return (
    <div className='contact-container'>
      <p className='title'>Contact me</p>
      <div className='form'>
        <form>
          <label htmlFor='name'>Name:</label><br />
          <input type='text' id='name' name='name' /><br />
          <label htmlFor='title'>Title:</label><br />
          <input type='text' id='title' name='title' /><br />
          <label htmlFor='content'>Content:</label><br />
          <textarea id='content' name='content' />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact