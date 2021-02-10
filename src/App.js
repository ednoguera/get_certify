import { useState } from 'react'
import './App.css';

function App() {
  const [devskillerEmail, setDevskillerEmail] = useState()
  console.log(devskillerEmail)

  return (
    <div className="App">
      <header>
        <h1>
          Acesso ao certificado
        </h1>
      </header>
      <form onSubmit={e => {

        console.log(e)
      }}>
        <div>
          <input onChange={e => {
            e.preventDefault()
            setDevskillerEmail(e.target.value)
          }} placeholder="Seu email do devskiller" />
        </div>
        <button>Acessar certificado</button>
      </form>
    </div>
  );
}

export default App;
