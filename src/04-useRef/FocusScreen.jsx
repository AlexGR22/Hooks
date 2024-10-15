import { useRef } from "react"

const FocusScreen = () => {


    const inputRef = useRef()

    console.log(inputRef);
    
    const onClick = () => {

        inputRef.current.select()
        
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="your name"
            ref={inputRef}
        />

        <button className="btn btn-primary mt-2"
            onClick={onClick}
        >
            Set Focus
        </button>
    </>
  )
}

export default FocusScreen