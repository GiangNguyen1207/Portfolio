import axios from 'axios'

import { showNotification } from 'redux/actions/notification'

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
      }
    } catch (error) {
      dispatch(showNotification('Ooop! Something goes wrong', 'failure'))
    }
  }

  return sendEmail
}
