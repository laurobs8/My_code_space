import React from 'react';
import './App.css';
import api from './service/api'

function App() {

  async function teste() {
    const arquivos = await api.get('/')
    console.log('API', arquivos.data)
  }

  return (
    <div className="App">
      <p>Teste</p>
      <button onClick={teste}>Click</button>
    </div>
  );
}

export default App;
