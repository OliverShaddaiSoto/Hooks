import React from "react";

const styles = {
    layout:{
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection:'column',
    },
    container: {
        width: '1200px',
    }
}

class Layout extends React.Component{
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                    LALA
                </div>
            </div>
        )
    }
}

export default Layout;