import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ImCross } from 'react-icons/im'
import { motion } from 'framer-motion'
import { StateContext } from './Tags/StateProvider'
export default function ModalContainer({ isOpen, Onclose }) {
const {  setWorkTime, setBreakTime , setLongTime} = useContext(StateContext)

    return (
        <Containermodel isOpen={isOpen} Onclose={Onclose} >
            <Modelcontent animate={{ y: 0, scale: 1 }} initial={{ y: '-100vh', scale: 0 }} exit={{ y: '-100vh', scale: 0 }}>
                <Modalheader>
                    <Headingsetting>Setting</Headingsetting>
                    <ImCross onClick={Onclose} style={{ cursor: 'pointer' }} />
                </Modalheader>
                <hr style={{ margin: ' -0.7rem  2rem  0 2rem' }} />
                <Modalbody>
                    <WorkingTime>
                        <p>Work Time</p>
                        <Input type="number" onChange={(e) => {setWorkTime(e.target.value * 60)}}/>
                    </WorkingTime>
                    <ShortBreak>
                        <p>Short Break</p>
                        <Input type="number" onChange={(e) => {setBreakTime(e.target.value * 60)}}/>
                    </ShortBreak>
                    <LongBreak>
                        <p>Long Break</p>
                        <Input type="number" onChange={(e) => {setLongTime(e.target.value * 60)}}/>
                    </LongBreak>
                    <ModelFooter>
                        <ApplyBtn  onClick={Onclose}>Cancel</ApplyBtn>
                        <ApplyBtn  onClick={Onclose}>OK</ApplyBtn>
                    </ModelFooter>
                </Modalbody>
            </Modelcontent>
        </Containermodel>
    )
}

const Containermodel = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
font-family: 'Lato', sans-serif;
    position: absolute;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    place-items: center;
    z-index: 20;

    `
const Modelcontent = styled(motion.div)`
background-color: white;
width: 45rem;
height: 36rem;
border-radius: 1rem;
z-index: 25;
transition: all 150ms ease;
`
const Modalheader = styled.div`
    width: 100%;
    display: flex;
   justify-content: space-between;
    padding: 3rem 2rem;
    
    
    `
const Headingsetting = styled.h2`
        color: ${props => props.theme.colors.secondary};
        font-weight: 600;
`
const Modalbody = styled.div`
width: 100%;

    
`
const WorkingTime = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
height: 8vh;
`
const ShortBreak = styled.div`
display:flex;
justify-content:space-around;
align-items :center;
height: 8vh;
`
const LongBreak = styled.div`
display:flex;
justify-content:space-around;
height: 8vh;
align-items :center;
`
const Input = styled.input`
    height: 4vh;
    width: 40%;
    border-width: 0 0 1px 0;
        :focus-visible {
             outline: -webkit-focus-ring-color auto 0px;
     }
`

const ModelFooter = styled.div`
    display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 3rem;
`
const ApplyBtn = styled.button`
    all: unset;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    padding: 10px 20px;
    border-radius: 50rem;
    width: 20%;
    text-align: center;
    cursor: pointer;
    
    &:hover{
        background-color: ${props => props.theme.colors.secondary};
        transition: all 500ms ease ;
        
    }
` 