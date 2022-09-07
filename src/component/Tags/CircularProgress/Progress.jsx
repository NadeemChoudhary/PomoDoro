import React, { useC, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { StateContext } from '../StateProvider'
import Clock from './Clock'

export default function Progress() {
    const { progress, setprogress, Timer, presentTime } = useContext(StateContext)
    useEffect(() => {
        setprogress(Timer / ( presentTime / 100 ))
    }, [progress, Timer])

    return (
        <OuterLine progress={progress}>
            <InnerLine>
                <Clock />
            </InnerLine>
        </OuterLine>
    )
}

const OuterLine = styled.div`
      width: 42rem;
    height: 42rem;
background: conic-gradient( ${props => props.theme.colors.primary} ${({ progress }) => progress}%,transparent ${({ progress }) => progress}%   );
    display: grid;
    place-items: center;
    border-radius: 50%;
    
`
const InnerLine = styled.div`
      width:40rem;
    height:40rem;
    background-color: #0c0111;
    display: grid;
    place-items : centers;
    border-radius: 50%;
    
`