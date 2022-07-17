import React, {useState} from 'react';

import {Buttons} from "./Counter/Buttons";
import "./App.css"


function  App (){
    let [number, SetNumber]=useState(0)



    let onClickHandler=(buttonName:string)=>{
        console.log(buttonName)
        buttonName==="inc"?  SetNumber(number => number+1) : SetNumber(0)


}


    return <div className='AppWrapper'>
     <div className ='display'><b className={number===5 ? "numberFive" : "numberOne "}>{number}</b></div>
       <Buttons value={number} onClick={onClickHandler}/>
    </div>
}

export default App