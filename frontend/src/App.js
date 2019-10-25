import React, { useState, useEffect } from 'react';
import './App.css';
import api from './service/api'

export default function App() {

  const [pastas, setPastas] = useState([]);

  useEffect(async () => {
    const response = await api.get('/')
    const RESPONSE = response.data.split(',')
    console.log(RESPONSE)
    setPastas(RESPONSE)
  }, [])

  return (
    <ul>
      {pastas.map(pasta => <div className="folderBoxes" key={pasta.id}>{pasta}</div>)}
    </ul>
  );
}


// export default App;
