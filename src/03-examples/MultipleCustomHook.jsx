import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(1)
    const { data,isLoading,hasError,errorMessage } =  useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    

  return (
    <>
        <h1>Pokemon Information {counter}</h1>
        <hr />
        {isLoading ? 
                <LoadingMessage/> : 
                (<PokemonCard 
                    id={data?.id} 
                    name={data?.name} 
                    sprites={[
                        data?.sprites.front_default,
                        data?.sprites.back_default,
                        data?.sprites.front_shiny,
                        data?.sprites.back_shiny
                    ]}/>)
        }

        {hasError && <p className="alert alert-danger">{errorMessage?.code}</p>}


        <button className="btn btn-primary mt-2" onClick={counter > 1 ? () => decrement () : null}>previous</button>

        <button className="btn btn-primary mt-2" onClick={() => increment ()}>next</button>
        <button className="btn btn-primary mt-2" onClick={reset}>Back to First</button>
    </>
  )
}
