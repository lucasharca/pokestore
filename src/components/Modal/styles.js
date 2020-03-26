import Modal from 'styled-react-modal';
import { darken } from 'polished';

export const StyledModal = Modal.styled`
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: #ddd;
  border: 5px solid black;
  border-radius: 50%;
  background #fff;
  overflow: hidden;

  @media (max-width: 400px) {
    width: 20rem;
    height: 20rem;
    font-size: 20px;
  }

  button {
    border: none;
    color: #fff;
    height: 40px;
    width: 100px;
    border-radius: 4px;
    margin: 0px 5px;
  }
  .topPokebal {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: linear-gradient(to top right, #ef5350 25%, #ffffff 200%);
    color: #fff;
    font-weight: bold;
    border-bottom: 5px solid black;

    height: 50%;
    width: 100%;

    span {
      padding: 10px;
    }
  }
  .bottomPokeball{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: linear-gradient(to top right, #000000 -50%, #ffffff 70%);
    width: 100%;
    height: 50%;
    padding-bottom: 40px;
  }


  .end {
    border: 2px solid black;
    color: #fff;
    font-weight: bold;
    background: #1870d5;

    &:hover {
      background: ${darken(0.05, '#1870d5')};
      transition: background 0.5s;
    }
  }

  .back {
    border: 2px solid black;
    color: #fff;
    font-weight: bold;
    background: #ef5350;

    &:hover {
      background: ${darken(0.05, '#ef5350')};
      transition: background 0.5s;
    }
  }
`;
