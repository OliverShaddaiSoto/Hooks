import React from "react";

export const MiComponente = (props: { miProp: any; }) => {
    const {miProp} = props
        return(
            <div>
                <h1>Nombre: {miProp}</h1>
            </div>
        )
}

