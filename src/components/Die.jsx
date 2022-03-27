import styled from 'styled-components';
const Die = (props) => {
  const styles ={
    backgroundColor: props.isHeld ? "#59E391" : "#fff"
  }
  return (
    <Button 
      style={styles}
      onClick={props.holdDice}
    >
      {props.value}
    </Button>
  )
}


export default Die
const Button = styled.button`
  cursor: pointer;
  font-family: 'karla', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 7px;
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 7px 14px;
`