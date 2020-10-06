import React, {useContext} from 'react'
import {MyContext} from './Reducer'

export default () => {
    let {state, dispatch} = useContext(MyContext);
    return (
        <>
        <t1>Text2: Name{state.name}----Age{state.age}</t1>
        <button onClick={()=>{
            dispatch({
                type: "setname",
                name: "Text2"
            })
        }}>SetName</button>
        <button onClick={()=>{
            dispatch({
                type: "setage",
                age: "000"
            })
        }}>SetAge</button>
        </>
    )
}