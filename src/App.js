import { useState } from 'react'
import './App.css';

const dataUrl = './hubspot-students-data.json'

function App() {
  const [devskillerEmail, setDevskillerEmail] = useState()
  const [studentList, setStudentList] = useState()

  console.log(devskillerEmail)

  const validateHandler = dataUrl => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div className="App">
      <header>
        <h1>
          Acesso ao certificado
        </h1>
      </header>
      <form onSubmit={validateHandler(dataUrl)}>
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
