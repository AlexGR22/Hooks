// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import CountarApp from './01-useState/CountarApp'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormCustomHook } from './02-useEffect/FormCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import FocusScreen from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayourEffect/Layout'
// import Memorize from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'

import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // {/* <HooksApp/> */}
    // {/* <CountarApp/> */}
    // {/* <CounterCustomHook/> */}
    // <SimpleForm/>
    // <FormCustomHook/>
    // <MultipleCustomHook/>
    // <FocusScreen/>
    // <Layout/>
    // <Memorize/>
    // <MemoHook/>
    // <CallbackHook/> 
    <Padre/>
  // </StrictMode>
)
