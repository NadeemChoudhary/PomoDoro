import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { StateContext } from './StateProvider'

const Tab = () => {
    
    const { activeTag, setactiveTag } = useContext(StateContext)
    const handleClick = (index)=>{
        setactiveTag(index)
    }

    return (
        <TabContainer>

            {["Work", "Short Break", "Long Break"].map((tag, i) => (
                <Tabs  activeTag={activeTag === i} key={i} onClick={()=>handleClick(i)}>{tag}</Tabs>
            )
            )}

        </TabContainer>
    )
}
export default Tab
const TabContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  height: 6rem;
  width: 45rem;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  border-radius: 5rem;
  align-items: center;
  padding: 2rem 1rem;

`
const Tabs = styled.div`
        all: unset;
        flex: 1;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 4rem;
        border-radius: 5rem;
        margin: 0 1rem;
        font-size: 2rem;
        color: white;
     
        &:hover{
            background-color: ${props => props.theme.colors.primary};
            cursor: pointer;
        }

        ${({ activeTag }) => activeTag && css`
                  background-color: #f85e04;`
    }`


    //     ${
    // ({ activeTag }) => {
    //     activeTag && css`
    //         background: ${(props) => props.theme.colors.primary};
    //     }