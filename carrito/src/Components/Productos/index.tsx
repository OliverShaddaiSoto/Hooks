import React from "react";
import Producto from "../Producto";
import { ProductosState } from "../Productos/interface";
import { ProductosProps } from "./interface";

const styles = {
    productos: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}

class Productos extends React.Component<ProductosProps>{
    render(){
        const { productos }  = this.props;
        return(
            <div style={styles.productos}>
                {productos.map(producto => 
                    <Producto agregarAlCarro={() => {console.log('No hace nada');
                    }} key={producto.name} producto={producto}/>
                )}
            </div>
        );
    }
}

export default Productos