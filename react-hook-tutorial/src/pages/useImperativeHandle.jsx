import React, {} from 'react'

export default function MyUseImperativeHandle() {

/* 
    useImperative可以让你在使用ref时自定义暴露给父组件的实例值
    在大多数情况下,应该避免使用ref这样的命令式代码
    应当与forwardRef一起
    useImperativeHandle{ref(传递来的),()=>{},[]}
*/

    return (
        <>
        <h2>MyUseImperativeHandle</h2>
        </>
    )
}