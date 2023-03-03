import React from "react";

const Timer = (props) => {
    const styles = { 
        counterReset: props.timer && "my-count 5",
        animation: props.timer && "countdown 5s linear infinite"
    }
    return (
        <div className="timer-container"
             style={styles}
        >
            <span className="timer" >
                {props.timer}
            </span>
        </div>
    )
}
export default Timer