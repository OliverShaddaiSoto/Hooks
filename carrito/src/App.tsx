import React from 'react'
import Productos from './Components/Productos'
import Layout from './Components/Layout'
import Title from './Components/Title'
import NavBar from './Components/NavBar'
import { ProductosState } from './Components/Productos/interface'



class App extends React.Component {
state = {
  productos: [
    { name: 'Monitor', price: 1500, img: '/productos/monitor.jpg' },
    { name: 'Elden Ring', price: 1000, img: '/productos/elden.jpg' },
    { name: 'Halo', price: 1600, img: '/productos/halo.jpg' },
  ],
  carro: [
    //{ name: 'Monitor', price: 1500, img: '/productos/monitor.jpg', cantidad: 1},
  ]
}


  agregarAlCarro = (producto: ProductosState) => {
    console.log(producto);
    return '';
  }

  render(){
  return (
    <div>
      <NavBar/>
      <Layout>
        <Title/>
        <Productos agregarAlCarro={this.agregarAlCarro} productos={this.state.productos}/>
      </Layout>
    </div>
  )
  }
}

export default App
