import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'Alex@example.com'  
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]:value
        })
        
    }

    useEffect(() => {
        // console.log('useEffect was called');
    },[])

    
    useEffect(() => {
        // console.log('FormState Changed!');
    },[formState])

    useEffect(() => {
        // console.log('Email Changed!');
    },[email])
    

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            { 
                (username === 'strider2') && <Message/>
            }

            

            <input
                type="email"
                className="form-control mt-2"
                placeholder="alex@me.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />


        </>
    )
}
