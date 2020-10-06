import React, {forwardRef, useRef, useImperativeHandle, useState} from 'react'

const Forward = forwardRef((props,ref)=>{
    return (
        <>
        <h3 ref={ref}>123</h3>
        <h4>444</h4>
        </>
    )
})

const Imperative = forwardRef((props,refA)=>{
    const inputRef = useRef()
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    useImperativeHandle(refA,()=>({
        name:"zhangsan",
        focus: ()=>{
            inputRef.current.focus()
        },
        count
    }),[num])
    return (
        <>
        <h3>count{count}</h3>
    <h3>num{num}</h3>
        <input type="text" ref={inputRef}/>
        <br />
        <button onClick={()=>{
            setCount(count+1)
        }}>Count+1</button>
        <br />
        <button onClick={()=>{
            setNum(num+1)
        }}>Num+1</button>
        <br />
        </>
    )
})



export default function MyUseImperativeHandle() {

/* 
    useImperative可以让你在使用ref时自定义暴露给父组件的实例值
    在大多数情况下,应该避免使用ref这样的命令式代码
    应当与forwardRef一起
    useImperativeHandle{ref(传递来的),()=>{},[]}
*/
    const h3El = useRef(null)

    const el = useRef()
    return (
        <>
        <Forward ref={h3El}/>
        <button onClick={()=>{
            console.log(h3El.current)
        }}>获取子组件DOM</button>

        <Imperative ref={el}/>
        <button onClick={()=>{
            console.log(el)
            el.current.focus()
        }}>获取子组件的自定义方法或者属性</button>
        </>
    )
}