import React, { useEffect, useState } from 'react'
import { Button, Typography, Divider } from '@material-ui/core'
import {Link} from 'react-router-dom'
export default function MyUseEffect() {
    const [count, setCount] = useState(0)
    /* 
    ComponentDidmount, didUpdate, WillUnmount
    */
    //useEffect(()=>{console.log(count)}) //默认监听所有的状态
    //useEffect(()=>{console.log(count)},[]) //只监听开局
    //useEffect(()=>{console.log(count)},[count]) //count
    useEffect(() => { 
        console.log(count)
        return ()=>{
            console.log("WillUnmount")
        }
        // eslint-disable-next-line
     }, [])
   
    return (
        <>
        <Link to="/">Goback</Link>
            <h2>useEffect</h2>
            <Divider />
            <Typography variant="h3" component="p">{count}</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setCount(count + 1)}
            >
                change-count
            </Button>
        </>
    )
}