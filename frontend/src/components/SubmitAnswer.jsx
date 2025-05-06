import { useState } from 'react';
import API from '../api';

export default function SubmitAnswer() {
  const [regNo, setRegNo] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/students/answer', {
        registrationNo: regNo,
        question,
        response,
      });
      setMessage('Answer submitted!');
    } catch (err) {
      setMessage('Submission failed');
    }
  };

  return (
    <div>
      <h2>Submit Answer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Registration No"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        /><br/>
        <textarea
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        /><br/>
        <textarea
          placeholder="Your Answer"
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        /><br/>
        <button type="submit">Submit Answer</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
