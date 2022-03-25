export interface ProductosProps{
    productos: ProductosState[];
}

export interface ProductosState{
    name: string;
    price: number;
    img: string;
}