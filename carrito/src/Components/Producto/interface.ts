
export interface ProductoProps{
    key: string;
    agregarAlCarro(): void;
    producto: ProductoState;
}

export interface ProductoState{
    name: string;
    price: number;
    img: string;
}