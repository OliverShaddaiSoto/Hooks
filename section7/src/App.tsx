import React, {  useRef } from 'react'

const App = () => {
    const ref = useRef()
    const inputRef = useRef()
    const click = () => {
        console.log(ref);
        ref.current.innerHTML = 'Chanchito Feliz';
    }

    const focus = () =>{
        inputRef.current.focus()
    }
    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focus}>Focus</button>
            <div onClick={click} ref={ref}>LALA</div>
        </div>
    )
}
export default App


