import React, { useState, useMemo, useEffect } from 'react'
import { Button, Collapse } from '@material-ui/core'
import ChildMemo from '../components/ChildMemo'
export default function MyUseMemo() {
    let [count, setCount] = useState(0)
    let [num, setNum] = useState(0)
    // let res = useMemo(() => {
    //     return {count,num}
    // }, [count])
    /* 
    useMemo是一种借助memoization (js的缓存技术)空间换速度
    第一个参数是函数,第二个是一个数组
    useMemo(()=>{},[默认可以不写])
    useMemo是在组件渲染中执行的
    而useEffect是在componentDidMount以后执行的
    */
    // useEffect(()=>{
    //     console.log("useEffect")
    // })

    // useMemo(()=>{
    //     console.log("useMemo")
    // })
    return (
        <>
            <h2>Parent:{count}----{num}</h2>
            <ChildMemo c={count} n={num}/>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    //使用useMemo控制是否更新
                    setCount(count + 1)
                    console.log(count)
                }}>Change-Count</Button>

            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    //使用useMemo控制是否更新
                    setNum(num + 1)
                    console.log(num)
                }}>Change-Count</Button>
        </>
    )
}