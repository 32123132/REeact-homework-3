
import { useState } from "react";
import { Print } from "./print_card";
export function Filtermore(props,state){
        const [array,setArray]=useState([])
        if(state == 'more'){


            
                for(const obj in props){
                    
                    if (Number(obj.procent) > 50) {
                        const newArr= [...array,{id: obj.id,prew:obj.prew,info:obj.info,procent:obj.procent}]
                        setArray(newArr)
                
                    }
                
                }
            
            
            return (<>
                {
                array.map(item => (<><Print id= {item.id} prew = {item.prew} info={item.info} procent ={Number(item.procent)}/></>))
            }
            </>)
            }else{
                for(let obj in props){
                    if (Number(obj.procent) < 50) {
                        setArray([...array,obj])
                
                    }
                
                }
            
            
            return (<>
                {
                array.map(item => (<><Print id= {item.id} prew = {item.prew} info={item.info} procent ={Number(item.procent)}/></>))
            }
            </>)
            }
        
            
            
            
        

    }
        
 