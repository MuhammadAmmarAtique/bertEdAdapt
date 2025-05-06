import { useState } from 'react';
import API from '../api';

export default function Dashboard() {
  const [regNo, setRegNo] = useState('');
  const [student, setStudent] = useState(null);

  const fetchData = async () => {
    try {
      const res = await API.get(`/students/${regNo}`);
      setStudent(res.data);
    } catch (err) {
      alert('Student not found');
    }
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <input
        type="text"
        placeholder="Registration No"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />
      <button onClick={fetchData}>Get Progress</button>

      {student && (
        <div>
          <h3>{student.name} - {student.registrationNo}</h3>
          <ul>
            {student.answers.map((ans, i) => (
              <li key={i}>
                <strong>Q:</strong> {ans.question}<br/>
                <strong>A:</strong> {ans.response}<br/>
                <strong>Feedback:</strong> {ans.feedback || 'Pending AI analysis'}<br/>
                <strong>Recommendation:</strong> {ans.recommendedTopic || 'TBD'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
