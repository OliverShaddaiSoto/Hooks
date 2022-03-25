export interface ProductosProps{
    productos: ProductosState[];
    agregarAlCarro: (producto: ProductosState)=>{};
}

export interface ProductosState{
    name: string;
    price: number;
    img: string;
}