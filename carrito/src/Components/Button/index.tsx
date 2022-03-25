import React from "react";
import { ButtonProps } from "./interface";

const styles = {
    button: {
        backgroundColor: '#395075',
        color: '#fff',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        
    }
}

class Button extends React.Component<ButtonProps>{
    render(){
        return(
            <button style={styles.button} {...this.props}></button>
        )
    }
}

export default Button;