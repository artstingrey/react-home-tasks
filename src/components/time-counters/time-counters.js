import { useState,useEffect } from "react";
import dayjs from "dayjs";
import classes from './time-counter.module.css';

function TimeCounters () {

    const [timer, setTimer] = useState(dayjs().unix()*1000)
    const [minusTimer, setMinusTimer] = useState(dayjs().add(20,"s").unix()*1000);
    const [timerCounter, setTimerCounter] = useState(false);

    useEffect( () => {
        console.log('useefffect');

        if(timerCounter) return
            const timerId = setInterval(() => {
                setTimer((timer) => timer + 1000);
                setMinusTimer((minusTimer) => minusTimer - 1000);
            }, 1000);
        
        return () => {
            clearInterval(timerId);
        }
    },[timerCounter]);

    useEffect(() => {
        if(timer === minusTimer)  setTimerCounter(true);    
        
    },[timer]);

    return (
        <div className={classes.timers}>
            <p>{dayjs(timer).format("HH:mm:ss")}</p>
            
            <p>{dayjs(minusTimer).format("HH:mm:ss")}</p>
        </div>
    );
};

export default TimeCounters;