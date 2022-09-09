import React from 'react'
import styled from 'styled-components'
import Progress from './Progress'
import {FiSettings} from 'react-icons/fi'
export default function Timer() {

    return (
        <>
            <Circular>
                <Progress />
            </Circular>
        
        </>
    )
}

const Circular = styled.div`
    width: 41rem;
    height: 41rem;
    background-color: #1d0333;
    margin:2rem auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    box-shadow: 5px 5px 15px #3a0664;
    `

