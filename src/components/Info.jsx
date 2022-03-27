import styled from 'styled-components';
const Info = () => {
  return (
    
  <Container>
    <Title>Tenzies</Title>
    <Paragraph>
      Roll until all dice are the same.
      Click each die to freeze it at its current value between rolls.
    </Paragraph>
  </Container>
  )
}

export default Info
const Container = styled.div`
  text-align: center;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.3;
  color: #2B283A;
`
const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #4A4E74;
  margin-bottom: 1.3em;
`
