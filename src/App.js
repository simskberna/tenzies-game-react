import React from 'react'
import { useEffect,useState,useRef } from 'react'
import Dice from './Dice'
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Timer from './Timer'
import { HomePage } from './HomePage'
function App() {
    
   const [dice,setDice] = useState(allNewDices())
   const [tenzies,setTenzies] = useState(false) 
   const [roll,setRoll] = useState(0) 
   const [timer,setTimer] = useState(0)  
   const [bestTime,setBestTime] = useState(getBestTime()) 
   const [begin,setBegin] = useState(false)
   function getBestTime(){
    let times = [];
    for (var i = 0; i < localStorage.length; i++){
        times.push(parseInt(window?.localStorage?.getItem(localStorage?.key(i))))
    }  
    Array.min = function (array) {
      return Math.min.apply(Math, array);
    };  
    let minimum = Array.min(times) !== Infinity ? Array.min(times) : 0 
    return minimum 
  }
   useEffect(()=>{
    setBestTime(getBestTime())
   },[localStorage.length])
   
   const intervalId = useRef();
    useEffect(() => { 
      setTimer(0)
      return () => clearInterval(intervalId.current);
    }, []);
     
    useEffect(() => { 
      if(!tenzies){
        intervalId.current = setInterval(() => setTimer( prevTimer => prevTimer+1) ,1000)
      }else{ 
        window.localStorage.setItem("gameId: "+nanoid(),timer)
        setTimer(0)
        clearInterval(intervalId.current)
      } 
    },[tenzies])

   const getRolls = () => { 
    setRoll(prevRoll => {return prevRoll+1}) 
   } 

   useEffect(() => { 
      const allHeld = dice.every(x => x.isHeld) 
      const allMatch = dice.every(x => x.value === dice[0].value)  
      if(allHeld && allMatch){   
        getRolls()
        setTenzies(true) 
      }  
   },[dice])
   function generateNewDice (){
    return{ 
        value: Math.ceil(Math.random()*6),
        id: nanoid(),
        isHeld:false 
    }
   }
  
   function allNewDices () {
    const newArray = [];
    for(let i = 0; i < 10; i++){
      newArray.push(  generateNewDice() )
    } 
    return newArray
   }
  
   const handleClick = (id) => {
        setDice(prevDice => prevDice.map(die =>{
          return die.id === id ? 
             {...die,isHeld:!die.isHeld}
             : die
        }))
        
   }
   const rollDice = () => { 
      if(!tenzies){
        setDice(prevDice => prevDice.map(die => {
          return die.isHeld ? 
          die : 
          generateNewDice()
      })) 
      }else{ 
        
        setTenzies(false)
        setDice(allNewDices())
      }
   }  
   const quitGame = () => {
     setTimer(0)
     setDice(allNewDices())
     setTenzies(false) 
     setBegin(prevState => !prevState)
   }
   
   
   const diceElements = dice.map(x => 
   <Dice  
          tenzies={tenzies}
          value={x.value} 
          key={x.id} 
          id={x.id}
          isHeld={x.isHeld}
          handleClick = {handleClick}
     />)
   
  return (
     <>
     {begin ? <main className='app-main'>
      {tenzies && <Confetti />}
      <div className="canvas">
        <Timer timer={timer}/> 
          <div className="best-time">
            <h6>The best time is : {bestTime}</h6>
          </div> 
        
          <div className='title-container'> 
            <span className="roll-times">Rolls: {roll}</span>  
            <h6 className="title">Tenzies</h6>
            <p className="description"> 
                    Roll until all dice are the same.  
                    Click each die to freeze it at its   
                    current value between rolls.
            </p>
          </div> 
          
          <div className={tenzies ? `dices disabed` : `dices`}>
             {diceElements}
          </div>
          <div className="cont-roll-dices">
            <button 
              className="roll-dices"  
              onClick={rollDice}
            > 
              {tenzies ? "NEW GAME" : "ROLL"}
            </button>
            </div>
            <div className="cont-quit-game">
            <button 
              className="quit-game"  
              onClick={quitGame}
            >  QUIT GAME
            </button>
            </div>
      </div> 
     </main>
     : 
     <HomePage setBegin={setBegin}/> 
    
    }
     </>
  );
} 
export default App;
