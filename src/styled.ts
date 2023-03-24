import styled from 'styled-components';

interface ButtonProps {
  left?: boolean
}

const Main = styled.div`
  background-image: linear-gradient(#33ffe3, #10453e);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
  width: auto;
  margin: 3% 0 0 0;
  text-align: center;
  font-size: 46px;
  color: #33ffe3;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #10453e;

  @media (max-width: 960px) {
    margin: 4% 0 0 0;
  }
`

const Board = styled.div`
  width: 70%;
  height: 90%;
  margin: 2% 4%;
  border: 5px solid #10453e;
  border-radius: 20px;

  @media (max-width: 960px) {
    height: 70%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 3%;

  @media (max-width: 960px) {
    margin-bottom: 4%;
  }
`

const Button = styled.button<ButtonProps>`
  width: 50px;
  height: 50px;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #33ffe3;
  border-radius: 0 30% 30% 0;
  ${props => props.left && 'transform: rotate(180deg)'};
  ${props => !props.disabled && 'cursor: pointer;'}
  ${props => props.disabled && 'opacity: 0.2;'}

  
  &:hover {
    ${props => !props.disabled && 'background-color: #2fedd3;'}
    
  }
`

const Image = styled.img`
  width: 20px;
`

export {Main, Title, Board, ButtonsContainer, Button, Image};
