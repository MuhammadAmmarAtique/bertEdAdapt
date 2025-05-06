import { useState } from 'react';
import API from '../api';

export default function Register() {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/students/register', {
        name,
        registrationNo: regNo,
      });
      setMessage('Registered successfully!');
    } catch (err) {
      setMessage('Error registering student');
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/>
        <input
          type="text"
          placeholder="Registration No"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        /><br/>
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
