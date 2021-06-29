// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef();
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  function handleSubmit(event) {
    // console.log(event)
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).
    event.preventDefault();
    // 💰 For example: event.target.elements[0].value
    onSubmitUsername(usernameInputRef.current)
  };
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)

  // 🐨 Call `onSubmitUsername` with the value of the input
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    // 🐨 add the onSubmit handler to the <form> below
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
