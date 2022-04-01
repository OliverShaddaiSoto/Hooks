import React, {Children, createContext, useContext} from "react";

const Context = createContext('mi valor');

const Provider = ({children}: any) =>{
    return(
    <Context.Provider value="Otro valor">
        {Children}
    </Context.Provider>
    )
}

class Componente extends React.Component{
    // static contextType = Context;
    render(){
        return(
            <div>Hola Mundo</div>
        )
    }
}

Componente.contextType =Context;

const App = () =>{
    return(
        <Provider>
            <Componente></Componente>
        </Provider>
    )
}

export default App;