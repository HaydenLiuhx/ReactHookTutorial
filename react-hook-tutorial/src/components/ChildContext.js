import React, {useContext} from 'react'
import {MyContext} from './MyContext'
export default () => {
    let count = useContext(MyContext);
    return (
        <>
        <h3>I am Child = > {count}</h3>
        </>
    )
}