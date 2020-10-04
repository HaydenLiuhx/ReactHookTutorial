import React, {useRef} from 'react'
import {Input, Button} from '@material-ui/core'
export default function MyUseRef() {
    //保存状态
    
    const inputEl = useRef(null)
    const save = useRef({value:"haydenn"})
    return (
        <>
        <h2>useRef</h2>
        <Input type="text" fullWidth inputRef={inputEl}/>
        <br />
        <br />
        <br />
        <Button 
        variant="contained" onClick={()=>{
            //console.log(inputEl.current.value)
            save.current.value = inputEl.current.value
                console.log(save)
            }} fullWidth color="primary">Get Ref</Button>
        </>
    )
}