import { useState } from "react"
import Button from "./Button"
import Card from "./shared/Card"

const FeedbackForm = () => {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  // For the review submission box input text, you have the following requirements:
  // - if no text is entered, disable the submit button component (through the setBtnDisabled prop).
  // - if text is entered but the number of characters is less than 10, disable submit button and set alert msg.
  // - if the criteria of text entered is > 10 characters, remove any alert message and enable the submit button.
  const handTextChange = e => {
    if (text.length <= 1) {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 8) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handTextChange}
            type='text'
            placeholder="Write a review" 
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

