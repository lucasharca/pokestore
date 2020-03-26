import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 75px;
  align-items: center;
  background: #ef5350;
  padding: 0 15px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  vertical-align: center;

  div {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;

    span {
      padding: 0 5px;
    }
  }

  input {
    height: 40px;
    font-size: 20px;
    padding: 5px;
    border: none;
    border-radius: 4px 0 0 4px;
    vertical-align: bottom;
  }
  button {
    height: 40px;
    width: 50px;
    font-size: 20px;
    vertical-align: bottom;
    padding: 5px;
    padding-top: 10px;
    border-radius: 0 4px 4px 0;
    border: none;
    background: #fff;
    color: #444;
  }
  img {
    height: 65px;
    padding-top: 2px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    img {
      display: none;
    }

    input {
      width: 80%;
    }
  }
`;
