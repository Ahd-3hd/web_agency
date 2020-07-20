import axios from 'axios'

const URL =
  'https://getform.io/f/ef44cf9c-7de8-4c58-8b02-7efea7436e87'

const formHandler = async data => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
  try {
    await axios.post(
      URL,
      { ...data, timeZone },
      {
        headers: { Accept: 'application/json' },
      },
    )
    return true
  } catch (e) {
    return false
  }
}
export default formHandler
