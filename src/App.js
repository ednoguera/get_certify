import { useState } from 'react'
import './App.css';

const dataUrl = './hubspot-students-data.json'

function App() {
  const [devskillerEmail, setDevskillerEmail] = useState()
  const [studentList, setStudentList] = useState()
  const [emailList, setEmailList] = useState(false)


  const fetchData = (e) => {
    e.preventDefault()

    fetch(dataUrl)
      .then(res => res.json())
      .then(data => {
        setStudentList(data)
        setEmailList(data.map(email => email.email))
      })
  }

  return (
    <div className="App">
      <header>
        <h1>
          Acesso ao certificado
        </h1>
      </header>
      <form onSubmit={fetchData}>
        <div>
          <input onChange={e => {
            e.preventDefault()
            setDevskillerEmail(e.target.value)
          }} placeholder="Seu email do devskiller" />
        </div>
        <button>Acessar certificado</button>
      </form>
      {emailList !== false ? emailList.includes(devskillerEmail) ? <h2>PARABÉNS!! Pegue seu certificado!</h2> : <h2>Que pena, você não tem certificado no momento</h2> : null}
    </div>
  );
}

export default App;
