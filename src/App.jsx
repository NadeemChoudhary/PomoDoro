
// import './App.css'
import styled from 'styled-components'
import Timer from './component/Tags/CircularProgress/Timer'
import Tab from './component/Tags/Tab'
import { RiTimerFlashLine } from 'react-icons/ri'
function App() {


  return (
    <>
      <TitleWrapper>

        <Title>
          <SetIcon>
            <RiTimerFlashLine />
          </SetIcon>
          &nbsp;PomoDoro App</Title>
      </TitleWrapper>

      <Tab />
      <Timer />

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
  margin:1rem 0 3rem 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
