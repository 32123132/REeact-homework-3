export function Button({title,setBut,func}){
    

    return(
        <>  
            
            <button onClick={title != 'put away competence' ? () => setBut('put away competence') : () => setBut('Call competence')}>{title}</button>
                   
        
        </>
    )
}