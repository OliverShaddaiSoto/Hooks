import Producto from ".";

export interface ProductoProps{
    key: string;
    agregarAlCarro(): ProductoState;
    producto: ProductoState;
}

export interface ProductoState{
    name: string;
    price: number;
    img: string;
}