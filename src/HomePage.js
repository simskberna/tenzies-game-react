import React from 'react'

export const HomePage = (props) => {

  return (
    <>
    <main className='home-page'>
      <div className='start-btn-cont'>
        <button className='start-btn roll-dices' onClick={() => props.setBegin(prevState => !prevState)}>
          START THE GAME 
        </button>
      </div>
    <span id="container__bubble--1" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
      <span id="container__bubble--2" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
      <span id="container__bubble--3" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
      <span id="container__bubble--4" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
      <span id="container__bubble--5" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
      <span id="container__bubble--6" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
      <span id="container__bubble--7" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
      <span id="container__bubble--8" className="container__bubble bubble">
        <span className="bubble bubble__circle1"></span>
        <span className="bubble bubble__circle2"></span>
        <span className="bubble bubble__circle3"></span>
      </span>
    </main>
    </>
  )
}
