import Producto from "../Producto";
import { ProductoState } from "../Producto/interface";

export interface ProductosProps{
    productos: ProductosState[];
    agregarAlCarro(): any ;
}

export interface ProductosState{
    name: string;
    price: number;
    img: string;
}