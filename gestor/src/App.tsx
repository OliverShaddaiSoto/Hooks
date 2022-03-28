import { useState } from 'react'


function App() {
  const [users, setUser] = useState({name: '', lastName: '', mail: ''})
  const handleUsers = (e: any) =>{
    setUser({
      ...users,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setUser({name: '', lastName: '', mail: ''})
  }
  

  const [usuarios, setUsuarios] = useState([]);
  
  const addUser = (e: any) =>{
    e.preventDefault();
    setUsuarios([
      ...usuarios,
      users,
    ])
    reset();
  }
  console.log(users, usuarios);
  
  return (
    <div>
   <form action="">
     <label >Nombre: </label>
     <input type="text" 
     name="name" 
     placeholder='nombre' 
     value={users.name} 
     onChange={handleUsers}/>
     <br />

     <label >Apellido: </label>
     <input type="text" 
     name="lastName" 
     placeholder='apellido' 
     value={users.lastName} 
     onChange={handleUsers}/>
     <br />

     <label >Correo: </label>
     <input type="mail" 
     name="mail" 
     placeholder='correo' 
     value={users.mail} 
     onChange={handleUsers}/>
     <br />

     <input type="submit" name="submit" onClick={addUser} />
   </form>
      <ul>
        {usuarios.map(x=>
          <li key={x.email}>{x.name} {x.lastName}: {x.mail}</li>)}
      </ul>
   </div>
  )
}

export default App
