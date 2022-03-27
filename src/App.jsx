import { useState , useEffect } from "react"
import Info from "./components/Info"
import Die from "./components/Die"
import styled from 'styled-components';
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
function App() {
  const generateDice = () => ({
    id: nanoid() ,
    value : Math.ceil(Math.random() * 6),
    isHeld:false
  })
  const allNewDice = () =>{
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(generateDice())
    }
    return newDice
  }
  const [Dice , setDice] = useState(allNewDice())
  const [tenzies , setTenzies] = useState(false)
  const RollDice = ()=> {
    setDice((prevDice => prevDice.map(die => (
      die.isHeld ? die : generateDice()
    ))))
  }
  const holdDice = (id) => {
  setDice(prevDice => {
    const newDice = prevDice.map(die => (
      die.id === id ? {...die, isHeld: !die.isHeld} : die
    ))
    return newDice
  })
  }
  useEffect(() => {
    const allHeld = Dice.every(die => die.isHeld)
    const firstValue = Dice[0].value
    const allSameValue = Dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
    }, [Dice])
  const newGame = () =>{
    setDice( allNewDice())
    setTenzies(false)
  }
  const diceElements = Dice.map(die => (
    <Die value={die.value} isHeld={die.isHeld} key={die.id} holdDice={()=> holdDice(die.id)} />
  ))
  return (
    <AppContainer>
      <Container>
        {tenzies && <Confetti />}
        <Info />
        <GameContainer>
          {diceElements}
        </GameContainer>
        <Button 
          onClick={()=> tenzies ? newGame() : RollDice()}
        >{tenzies ? 'New Game' : 'Roll'}</Button>
      </Container>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`
const Container = styled.div`
  background-color: #F5F5F5;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width:50vw;
  height: 60vh;
  margin-top: 8vh;
  border-radius: 5px;
`
const GameContainer = styled.div`
  display: grid;
  grid-gap: 17px;
  grid-template: auto auto / repeat(5, 1fr);
`
const Button = styled.button`
  font-family: 'karla', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  background: #5035FF;
  color: #fff;
  border-radius: 3.81277px;
  border: none;
  padding: 1em 2em;
  margin-top: 4rem;
  cursor: pointer;
  &:active{
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`