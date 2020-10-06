import React, {useEffect,useState} from 'react'
import { useLayoutEffect } from 'react'

export default function MyUseLayout() {
    /* 
    useEffect是在didMount以后执行的
    useLayout是在浏览器绘制之前执行(回阻塞组件挂载)
    */
   const [count, setCount] = useState(0)
   useEffect(()=>{
       console.log('useEffect')
       return ()=>{
           console.log("useEffect-return")
       }
   })

   useLayoutEffect(()=>{
       console.log('useLayoutEffect')
       return ()=>{
           console.log('useLayoutEfect-return')
       }
   })
    return (
        <>
        <h2>useLayout</h2>
    <h2>{count}</h2>
        <button
        onClick={()=>{
            setCount(count+1)
        }}
        >useLayout-useEffect</button>
        </>
    )
}