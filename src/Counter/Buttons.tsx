import React from 'react';
import s from "./Button.module.css"

type propsButtonType={
    onClick:(buttonName:string)=>void
    value: number
}

export const Buttons=(props:propsButtonType)=>{
    console.log(props.value)
    return (
        <div className={s.controller}>
        <button disabled={props.value===5} onClick={()=>props.onClick("inc")} ><b>inc</b></button>
        <button disabled={props.value===0} onClick={()=>props.onClick("reset")}><b>reset</b></button>
        </div>

    )
}/*disabled*/