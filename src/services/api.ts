import axios from 'axios'

export const useService = () => {
  const sendEmail = async (name: string, title: string, content: string) => {
    try {
      const res = await axios.post('', {
        name: name,
        title: title,
        text: content,
      })
      if (res.status === 200) {
        alert('Email sent successfully')
      }
    } catch (error) {
      alert('Something goes wrong')
    }
  }

  return sendEmail
}
