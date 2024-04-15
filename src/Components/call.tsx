import { Card } from "./Cards"
export function Button({title,setBut,func}){
    if(title === 'put away competence'){
        return(<>
            <button onClick={title != 'put away competence' ? () => setBut('put away competence') : () => setBut('Call competence')}>{title}</button>
            <Card />
        </>
    )
    }

    return(
        <>  
            
            <button onClick={title != 'put away competence' ? () => setBut('put away competence') : () => setBut('Call competence')}>{title}</button>

        
        </>
    )
}