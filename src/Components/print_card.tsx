import style from '../App.module.css'
import {Card} from './Cards.tsx'

export function Print({id,prew,info,procent}){
    
    return(
        <div className={style.bord}>
            
                <h5 >{prew}</h5>
                <h5 >{info}</h5>
                <h5 >{procent+'%'}</h5>
                
        </div>
    )
};