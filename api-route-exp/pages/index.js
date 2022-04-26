import { useRef } from 'react'

function HomePage()
{
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFromHandler(event)
  {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback
    }
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: { 'Content-Type': 'application/json'}
    }).then( response => response.json()).then(data => console.log(data));
  }

    return(
        <div>
            <h2>HomePage</h2>
            <input type='text' id='email' ref={emailInputRef}></input>
            <textarea id="feedback" ref={feedbackInputRef}></textarea>
            <button onClick={ submitFromHandler }> send feedback</button>
        </div>
    );
}

export default HomePage;