import axios from 'axios'

import { showNotification, hideNotification } from 'redux/actions/notification'

export const useService = (dispatch: Function) => {
  const sendEmail = async (name: string, title: string, content: string) => {
    try {
      const res = await axios.post(
        'https://us-central1-backend-porfolio.cloudfunctions.net/app/sendEmail',
        {
          name: name,
          title: title,
          content: content,
        }
      )
      if (res.status === 200) {
        dispatch(
          showNotification(
            'Your message has been sent. Thank you for contacting!',
            'success'
          )
        )
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
