import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [text, setText] = useState('');

  useEffect(()=>{
    axios
      .get<string>('http://localhost:8080/hello')
      .then(value => setText(value.data))
      .catch(() => setText("Nothing Responses"))
  }, []);

  return (
    <div className="App">
      {text}
    </div>
  );
}

export default App;
