import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { MiComponente } from './Components/MiComponente'

/*const App = () => {
  return (
   <div>
     <MiComponente miProp={'chanchito feliz'}/>
   </div>
  )
}*/

/*class App extends React.Component{
  state = {contador: 0}
  incrementar = () =>{
    this.setState({contador: this.state.contador+1})
  }
  decrementar = () =>{
    this.setState({contador: this.state.contador-1})
  }
  render(){
    return(
      <div>
      Contador: {this.state.contador}
      <br />
      <button onClick={this.incrementar}>Incrementar</button>
      <button onClick={this.decrementar}>Decrementar</button>
      </div>
    )
  }
}*/

const useContador = (inicial: any) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  }
  const decrementar = () => {
    setContador(contador - 1);
  }

  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar, decrementar] = useContador(0);
  return (
    <div>
      Contador: {contador}
      <br />
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}



export default App
