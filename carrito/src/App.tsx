import React from 'react'
import Productos from './Components/Productos'
import Layout from './Components/Layout'
import Title from './Components/Title'



class App extends React.Component {
state = {
  productos: [
    { name: 'Monitor', price: 1500, img: '/productos/monitor.jpg' },
    { name: 'Elden Ring', price: 1000, img: '/productos/elden.jpg' },
    { name: 'Halo', price: 1600, img: '/productos/halo.jpg' },
  ]
}

  render(){
  return (
    <div>
      <Layout>
        <Title/>
        <Productos productos={this.state.productos}/>
      </Layout>
    </div>
  )
  }
}

export default App
