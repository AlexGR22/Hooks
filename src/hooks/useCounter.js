import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (valueIncrement = 1) =>{

        setCounter(counter + valueIncrement)
    }

    const decrement = ( valueDecrement = 1) =>{
        
        setCounter(counter - valueDecrement)
    }

    const reset = () =>{
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
