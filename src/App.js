import React, {useState } from 'react'
import './App.css';
import { Quiz } from './Components/Quiz';
import { Start } from './Components/Start';
function App() {
  const [start, setStart]=useState(false)
  return (
    <div className="quiz">
      {start?<Quiz />:<Start props={setStart} />}
    </div>
  );
}

export default App;
