import { useState } from "react";
import { Print } from "./print_card";
const card =[
        {id: 0, prew : 'JS', info : 'how well do youn know JS', procent : 50},
        {id: 1, prew : 'Node', info : 'You are knon Node?', procent : 50},
        {id: 2, prew : 'React', info : 'You like React is ...', procent : 50}
    ];

export function Card(props = -1){
    const [value,setValue] = useState('')
    const [value1,setValue1] = useState('')
    const [value2,setValue2] = useState('');
    const [array,setArray] =useState(card);
    function prew(event){
        setValue(event.target.value);
    };
    function info(event){
        setValue1(event.target.value);
    };
    function procent(event){
        setValue2(event.target.value);
    };
    function onAddClick(){
        const newArray = [...array,{id: array.length,prew:value,info:value1,procent:value2}]
        setArray(newArray);
        setValue('');
        setValue1('');
        setValue2('');
    }
    



    

    return(
        <>  
            <div>
                <input  value={value} type="text" onChange={prew}/>
                <input  value={value1} type="text" onChange={info}/>    
                <input  value={value2} type="text" onChange={procent}/>
            </div>
            <div>
                <button onClick={onAddClick}>
                    ADD
                </button>
            </div>      
            {
                array.map(item => (<Print key = {item.id} prew={item.prew} info={item.info} procent={item.procent}/>))
            }
        </>
    )
};

