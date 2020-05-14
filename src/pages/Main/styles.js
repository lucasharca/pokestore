import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(25, 25, 32);
  height: 80vh;
  margin: 0px auto;
  padding: 0 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
  }
  button {
    width: 100px;
    padding: 10px;
    border: none;
    margin: 10px;
    border-radius: 4px;
    font-weight: bold;
  }
  .fire {
    background: #ef5350;
  }
  .water {
    background: #105e9c;
  }
`;
