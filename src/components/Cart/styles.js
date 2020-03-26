import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  border-radius: 4px;
  min-width: 275px;
  height: 744px;
  background: #fff;
`;

export const Header = styled.header`
  width: 100%;
  font-weight: bold;
  font-size: 25px;
  align-self: center;
  padding: 5px;
  width: 98%;
  max-height: 650px;
  text-align: center;
  overflow: auto;
  overflow-x: hidden;

  .headDiv {
    border-bottom: 1px solid #888;
    margin: 0 auto;
    width: 80%;
  }
`;

export const PokeContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  font-size: 16px;

  img {
    height: 50px;
  }

  div {
    display: flex;
    align-items: center;
  }

  button {
    border: none;
    width: 25px;
    height: 25px;
    background: none;
    font-weight: bold;
    padding-bottom: 2px;
    padding-left: 5px;
    :hover {
      color: #ef5350;
    }
  }
`;

export const Footer = styled.footer`
  button {
    width: 100%;
    border: none;
    height: 40px;
    background: #ef5350;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    border-radius: 0 0 4px 4px;

    &:hover {
      background: ${darken(0.05, '#ef5350')};
      transition: background 0.5s;
    }
  }

  .disabled {
    background: #ddd;
    &:hover {
      background: #ddd;
    }
  }
`;

export const TotalCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  font-weight: bold;
  font-size: 20px;

  background: #ddd;
`;
