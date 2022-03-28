import React, {  useReducer } from 'react'

// {contador : 0}
// action = {type: String, payload: any}
const reducer  = (state: any , action: any) => {
    switch (action.type) {
        case 'incrementar':
            return { contador : state.contador + 1}
        case 'decrementar':
            return { contador : state.contador - 1}
        case 'set':
            return { contador :  action.payload}
    }
    
}

const App = () => {
    return(
        <div>

        </div>
    )
}
export default App
