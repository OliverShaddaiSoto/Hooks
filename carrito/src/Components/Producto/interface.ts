
export interface ProductoProps{
    key: string;
    agregarAlCarro: (producto: ProductoState)=>{};
    producto: ProductoState;
}

export interface ProductoState{
    name: string;
    price: number;
    img: string;
}