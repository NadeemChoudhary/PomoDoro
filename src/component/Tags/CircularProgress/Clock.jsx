import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { StateContext } from '../StateProvider';

export default function Clock() {
    // const [Timer, setTimer] = useState(1000); before useContext 
    const { Timer, setTimer, Isactive, setIsactive ,presentTime} = useContext(StateContext) // after usecontext


    const StartPause = () => {
        setIsactive(!Isactive);
    }
    useEffect(() => {

        if (Isactive && Timer > 0) {
            const interval = setInterval(() => {
                setTimer((Timer) => Timer - 1)
            }, 1000);
            return () => clearInterval(interval)
        }
    }, [Timer, Isactive])
    const getTime = () => {
        const min = Math.floor(Timer / 60);
        const sec = Timer % 60;
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`
    }
    const ResetTime=()=>{
        setTimer(presentTime);
        setIsactive(false)
    }
    return (
        <ClockContainer>

            <ClockTime>{getTime(Timer)}</ClockTime>
            <ClockButton onClick={StartPause}>{Isactive ? "pause" : "Start"}</ClockButton>
            ${Timer === 0 && <ResetButton onClick={ResetTime}> Reset</ResetButton>}
        </ClockContainer>
    )
}
const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const ClockTime = styled.h3`
    color: rgb(255, 255, 255);
    font-size: 8rem;
    letter-spacing: 1px;
    `
const ClockButton = styled.button`
    all: unset;
    font-size: 2rem;
    letter-spacing: 13px;
    color: white;
margin-top: 1rem;
    `
const ResetButton = styled(ClockButton)`
        font-size: 2rem;
        letter-spacing: 10px;
        color: red;
        cursor: pointer;   
        margin-top   : 1rem;
`