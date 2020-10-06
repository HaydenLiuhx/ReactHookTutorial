import React, {useReducer} from 'react'

export default function MyUseReducer() {
    /* 
        和redux是一样的
        useReducer()是个函数,第一个参数reducer,第二个参数初始值,第三个参数init
        useReducer()返回值是一个数组,第一个是state,第二个是dispatch
        const [state, dispatch] = useReducer(reducer,初始值)
    
    */
    const [state, dispatch] = useReducer((state, action)=>{
        switch(action.type){
            case "setname":
                return {
                    ...state,
                    name: action.name
                }
            case "setage":
                return {
                    ...state,
                    age: action.age
                }
            default: 
                return state
        }
    },{name:"Zhangsan", age:18})
    return (
        <>
        <h2>Name is:{state.name}----Age is:{state.age}</h2>
        <button
        onClick={()=>{
            dispatch({
                type:"setname",
                name:"SI Ge"
            })
        }}
        >setname</button>
        <button
        onClick={()=>{
            dispatch({
                type:"setage",
                age:99
            })
        }}
        >setage</button>
        </>
    )
}