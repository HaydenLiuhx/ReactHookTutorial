import React, {useState} from 'react'

export default function MyUseState() {
    const [count, setCount] = useState(0)
    const [obj, setObj] = useState({name:"zhangsan"})
    const [arr, setArr] = useState([1,2,3])
    const [fun, setFun] = useState(()=>{
        return 1
    })
    return (
        <>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Click</button>

    <h2>{obj.name}-+-+-{obj.age}</h2>
    <button onClick={()=>(
        setObj({
        ...obj,
        age: 18,
        name:"lisi"
    }))}>ChangeObj</button>
    <h2>{arr}</h2>
    <button onClick={()=>(
        setArr(()=>{
            arr.push(345)
            return [...arr]
        })
        )}>ChangeObj</button>

<h2>{fun}</h2>
        </>

    
    )
}