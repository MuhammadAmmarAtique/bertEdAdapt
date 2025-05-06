import React from 'react'
import './App.css'
import Register from './components/Register';
import SubmitAnswer from './components/SubmitAnswer';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div style={{ padding: '20px' }}>
      <h1>BERT-Based Adaptive Learning System</h1>
      <Register />
      <hr />
      <SubmitAnswer />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App
