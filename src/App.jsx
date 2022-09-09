
// import './App.css'
import styled from 'styled-components'
import Timer from './component/Tags/CircularProgress/Timer'
import Tab from './component/Tags/Tab'
import { RiTimerFlashLine } from 'react-icons/ri'
import ModalContainer from './component/ModalContainer'
import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import { AnimatePresence } from 'framer-motion'
function App() {
  const [isOpen, setisOpen] = useState(false)
  const Onclose = () => setisOpen(false)
  const OnOpen = () => setisOpen(true)

  return (
    <>

      <AnimatePresence >
        {
          isOpen &&


          <ModalContainer isOpen={isOpen} Onclose={Onclose} />
        }
      </AnimatePresence>
      <TitleWrapper>

        <Title>
          <SetIcon>
            <RiTimerFlashLine />
          </SetIcon>
          &nbsp;PomoDoro App
        </Title>
      </TitleWrapper>

      <Tab />
      <Timer />
      <SettingButton>
        <FiSettings onClick={OnOpen} />
      </SettingButton>
    </>
  )
}

const TitleWrapper = styled.div`

  
`
const SetIcon = styled.div`
font-size: 4rem;
margin-top: 1rem;


  
`
const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-align: center;
  /* background-color: red; */
  padding: 1rem 0;
  margin:0rem 0 0.5rem 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SettingButton = styled.div`
    display: grid;
    place-items: center;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
`
export default App
