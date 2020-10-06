import React, {useContext}from 'react'
import {MyContext} from './Reducer'

export default () => {
    let {state, dispatch} = useContext(MyContext)
    return (
        <>
        <t1>Text1:名字{state.name}, 年龄{state.age}</t1>
        <button onClick={()=>{
            dispatch({
                type:"setname",
                name: "Text1"
            })
        }}>SetName</button>
        <button onClick={()=>{
            dispatch({
                type:"setage",
                age: "999"
            })
        }}>SetAge</button>
        </>
    )
}