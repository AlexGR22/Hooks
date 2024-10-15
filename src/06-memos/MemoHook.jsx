import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const heavyStuff = (iterationNumber = 100 )=>{
    
    for(let i = 0; i < iterationNumber; i++){
        console.log('Ahi vamos')
    }

    return `${iterationNumber} iteration cycles`

}

export const MemoHook = () => {

    const { counter,increment } = useCounter(4000)
    const [show, setShow] = useState(true)

    const memoHeavyStuff =  useMemo(() => heavyStuff(counter), [counter])

    

  return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>
            { memoHeavyStuff }
        </h4>
        <button
            className='btn btn-primary'
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className='btn btn-outline-primary ml-3'
            onClick={ () => setShow(!show) }
        >
            Show/Hide 
        </button>

        <p className='alert alert-info text-center text-uppercase text-bold mt-2'>
        { JSON.stringify(show) }
        </p>
    </>
  )
}
