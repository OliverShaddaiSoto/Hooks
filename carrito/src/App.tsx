import React from 'react'
import Productos from './Components/Productos'
import Layout from './Components/Layout'
import Title from './Components/Title'
import NavBar from './Components/NavBar'
import { ProductosProps, ProductosState } from './Components/Productos/interface'




class App extends React.Component {
state = {
  productos: [
    { name: 'Monitor', price: 1500, img: '/productos/monitor.jpg' },
    { name: 'Elden Ring', price: 1000, img: '/productos/elden.jpg' },
    { name: 'Halo', price: 1600, img: '/productos/halo.jpg' },
  ],
  carro: [
    { name: 'Monitor', price: 1500, img: '/productos/monitor.jpg', cantidad: 1},
  ]
}

agregarAlCarro = (producto: any) => () =>{
  
  const {carro} = this.state;

  if (carro.find(x => producto.name === producto.name)) {
    const newCarro = carro.map(x => producto.name === producto.name ?
       ({
         ...producto,
         cantidad: carro[0].cantidad +1
       })
       : x) 
       return this.setState({carro: newCarro})
  }
  return this.setState({
    carro: this.state.carro.concat({
      ...producto,
      cantidad: 1,
    })
  })
}

  render(){
    
    
  return (
    <div>
      <NavBar/>
      <Layout>
        <Title/>
        <Productos agregarAlCarro={this.agregarAlCarro(this.state.productos[0])} productos={this.state.productos}/>
      </Layout>
    </div>
  )
  }
}

export default App
