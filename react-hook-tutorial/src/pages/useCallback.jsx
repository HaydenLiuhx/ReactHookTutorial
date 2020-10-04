import React, {useState,useCallback} from 'react'

export default function MyUseCallback() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    let callback = useCallback(()=>{
        console.log(count)
        return count
    },[num])
    /* 
    和useMemo一样同样用到了缓存技术
    不同的是,useCallback缓存的是一个函数,是个函数就可以执行
    useCallback(()=>{},[可以不写])
    */
    return (
        <>
        <h2>State count: {count}</h2>
    <h3>num{num}</h3>
    <h3>callback:{callback()}</h3>
        <button onClick={()=>{
            setCount(count+1)
        }}>setCount</button>
        <button onClick={()=>{
            setNum(num+1)
        }}>setNum</button>
        </>
    )
}