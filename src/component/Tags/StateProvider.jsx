import { useEffect, useState } from 'react'
import { createContext } from "react";
export const StateContext = createContext()
const StateProvider = ({ children }) => {
    // for other Tabs Timer state 
    const [WorkTime, setWorkTime] = useState(25 * 60)
    const [BreakTime, setBreakTime] = useState(5)
    const [LongTime, setLongTime] = useState(40 * 60)
    // 
    const [presentTime, setpresentTime] = useState() //inital PResent value of time store
    const [Timer, setTimer] = useState(0);
    const [Isactive, setIsactive] = useState(false);  // puse / start button
    const [progress, setprogress] = useState(90) // progress bar orange
    const [activeTag, setactiveTag] = useState(0) // tabs color value 
    useEffect(() => {
        switch (activeTag) {
            case 0:
                setTimer(WorkTime);
                setpresentTime(WorkTime)
                break;
            case 1:
                setTimer(BreakTime)
                setpresentTime(BreakTime)
                break;
            case 2:
                setTimer(LongTime)
                setpresentTime(LongTime)
            default:
                break;
        }
    }, [activeTag, BreakTime,LongTime,WorkTime])

    return (
        <StateContext.Provider value={{presentTime, setpresentTime, Timer, setTimer, Isactive, setIsactive, progress, setprogress, activeTag, setactiveTag ,WorkTime, setWorkTime,  BreakTime, setBreakTime ,LongTime, setLongTime }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider