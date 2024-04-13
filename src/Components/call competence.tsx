import { useState } from "react";
import { Button } from "./call";
export function Call(){
    const [but,setBut] =useState('Call competence')
    return(
        <>
            
            <Button title = {but} setBut = {setBut} func={123123}/>
        </>
    )


}