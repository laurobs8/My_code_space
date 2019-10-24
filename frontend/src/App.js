import React from 'react';
import './App.css';
import api from './service/api'

function App() {

  async function teste() {
    const arquivos = await api.get('/')
    const dados = arquivos.data.split(',')

    console.log(dados)
  }

  return (
    <div className="App">
      <p>Teste</p>
      <button onClick={teste}>Click</button>
    </div>
  );
}

export default App;
