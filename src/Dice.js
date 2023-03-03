import React, { useState } from 'react' 
const Dice = (props) => {
    const [dots,setDots] = useState(getAllDots())
    const styles = {
        backgroundColor: props.isHeld && "#59E391" 
    }
    function getAllDots(){
        let newValue = [];
        for(let i = 0; i < props.value;i++){
            newValue.push(i)
        } 
        return newValue
    }    
    const dotElements = dots.map(x => <span key={x}>.</span>)
    return(
        <div  
            onClick={() => {props.handleClick(props.id)}}  
            className={props.tenzies ? `dice disabled` : `dice`} 
            style={styles}
            
            >
            <div className={props.tenzies ? `dot disabed` : `dot`}>{dotElements}</div>
        </div>
    )
}
export default Dice