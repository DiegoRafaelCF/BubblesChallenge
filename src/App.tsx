import React from 'react';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {Main, Title, Board, ButtonsContainer, Button, Image} from './styled';

interface BubbleInterface {
  x: string,
  y: string
}

const BubbleAppearing = keyframes`  
  from { width: 0; height: 0 }
  to { width: 50px; height: 50px }
`;

const Bubble = styled.div<BubbleInterface>`
  position: fixed;
  left: ${props => `${props.x}px`};
  top: ${props => `${props.y}px`};
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 3px solid #c5fff6;
  background-color: #a6fff2;
  border-radius: 100%;
  animation-name: ${BubbleAppearing};
  animation-duration: 500ms;
`;

const App: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Array<BubbleInterface>>([])
  const [removed, setRemoved] = useState<Array<BubbleInterface>>([])
  const [bubbles, setBubbles] = useState<Array<any>>([])
  const [bridge, setBridge] = useState<any>()

  useEffect(() => {
    const aux: Array<any> = []
    coordinates.forEach(att => {
      aux.push(<Bubble x={att.x} y={att.y} />)
    })
    setBubbles(aux)
  }, [coordinates])

  useEffect(() => {
    if(bridge) {
      setRemoved(state => {
        const copy = state
          copy.push(bridge)
          const output = [...copy]
          return output
      })
    }
  }, [bridge, setRemoved])
  
  return (
    <Main>
      <Title>Bubbles</Title>
      <Board onClick={event => {
        setRemoved([])
        setCoordinates(state => {
          const copy = state
          copy.push({x: String(event.clientX), y: String(event.clientY)})
          const output = [...copy]
          return output
        })
      }}>{bubbles.length > 0 && (bubbles)}</Board>
      <ButtonsContainer>
        <Button disabled={coordinates.length === 0} left onClick={() => {
            setCoordinates(state => {
              const copy = state
              setBridge(copy.pop())
              const output = [...copy]
              return output
            })
        }} >
          <Image src="/arrow.png" alt="left-arrow" />
        </Button>
        <Button disabled={removed.length === 0} onClick={() => {
            setCoordinates(state => {
              const copy = state
              copy.push(removed[removed.length-1])
              const output = [...copy]
              return output
            })
            setRemoved(state => {
              const copy = state
              copy.pop()
              const output = [...copy]
              return output
            })
        }} >
          <Image src="/arrow.png" alt="right-arrow" />
        </Button>
      </ButtonsContainer>
    </Main>
  );
}

export default App;
