import axios from 'axios'

import { showNotification, hideNotification } from 'redux/actions/notification'

export const useService = (dispatch: Function) => {
  const sendEmail = async (name: string, title: string, content: string) => {
    try {
      const res = await axios.post('', {
        name: name,
        title: title,
        content: content,
      })
      if (res.status === 200) {
        dispatch(showNotification('Email has been sent', 'success'))
        setTimeout(() => {
          dispatch(hideNotification())
        }, 4000)
      }
    } catch (error) {
      dispatch(showNotification('Ooop! Something goes wrong', 'failure'))
      setTimeout(() => {
        dispatch(hideNotification())
      }, 4000)
    }
  }

  return sendEmail
}
