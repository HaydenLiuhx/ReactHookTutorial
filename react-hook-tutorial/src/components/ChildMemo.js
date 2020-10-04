import React from 'react'
import {useMemo} from 'react'
export default ({c,n}) => {
    let res = useMemo(()=>{
        return {c,n}
    },[c])
    return (
    <h2>Child:count{res.c}---num{res.n}</h2>
    )
}