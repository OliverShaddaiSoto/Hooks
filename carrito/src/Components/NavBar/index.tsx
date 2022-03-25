import React from "react";
import Carro from "../Carro";
import Logo from "../Logo";

const styles = {
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        possition: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class NavBar extends React.Component{
    render(){
        return(
            <nav style={styles.navBar}>
                <Logo/>
                <Carro/>
            </nav>
        )
    }
}

export default NavBar;