//import React, {useRef,useState,createContext,useContext} from 'react'
import React, {useRef,useState} from 'react'
import {Input, Button} from '@material-ui/core'
import {MyContext} from '../components/MyContext'
import ChildContext from '../components/ChildContext'

//const MyContext = createContext()

/* const ChildContext = () => {
    let count = useContext(MyContext)
    return (
        <h3>I am Child->{count}</h3>
    )
} */
export default function MyUseContext() {
    let [count, setCount] = useState(0)
    const inputEl = useRef(null)
    return (
        <>
        <MyContext.Provider value={count}>
            <ChildContext></ChildContext>
        </MyContext.Provider>
        <h2>useRef</h2>
        <Input type="text" fullWidth inputRef={inputEl}/>
        <br />
        <br />
        <br />
        <Button 
        variant="contained" onClick={()=>{
            setCount(inputEl.current.value)
            }} fullWidth color="primary">Get Ref</Button>
        </>
    )
}