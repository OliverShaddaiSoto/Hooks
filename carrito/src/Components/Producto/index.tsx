import React from "react";
import Button from "../Button";
import { ProductoProps } from "./interface";

const styles ={
    producto:{
        border: 'solid 1px #eee',
        boxShadow: '0px 5px rgb(0,0,0, 0.1)',
        width: '30%',
        padding : '10px 15px',
        borderRadius: '5px'
    }, 
    img: {
        width: '100%',
    }
}

class Producto extends React.Component<ProductoProps>{
    render(){    
        const {producto, agregarAlCarro} = this.props;
        return(
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.name} width='350' height='250' />
                <h3>{producto.name}</h3>
                <p>price: {producto.price}</p>
                <Button onClick={() => agregarAlCarro()} > Agregar al carro </Button>
            </div>
        )
    }

}

export default Producto;