

function App() {
  
const submit = (e:any) =>{
  e.preventDefault();
  const data = Array.from(new FormData(e.target));
  console.log(Object.fromEntries(data));
  
}
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <span>LALA</span>
          <input type="text" name='campo'/>
        </div>
        <input type="text" name="campo-2" id="campo-2" />
        <input type="submit" value='Enviar'/>
      </form>
    </div>
  )
}

export default App
