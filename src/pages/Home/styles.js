import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  background: rgb(25, 25, 32);
  height: 88vh;
  margin: 0px auto;
  padding: 0 15px;

  @media (max-width: 1070px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;
export const ProductContainer = styled.div``;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 10px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    max-width: 300px;
    max-height: 240px;

    img {
      align-self: center;
      width: 130px;
      height: 130px;
    }
    > strong {
      text-transform: capitalize;
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin: 5px 10px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 0px 10px 10px;
    }
  }

  @media (max-width: 1070px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;

    li {
      max-width: 100%;
    }
  }

  button {
    color: #fff;
    border: 0;
    border-radius: 0 0 4px 4px;
    height: 40px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }

  .inCart {
    background: #ddd;
    cursor: auto;
  }

  .notInCart {
    background: #ef5350;
    &:hover {
      background: ${darken(0.05, '#ef5350')};
      transition: background 0.5s;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 80px;
    height: 40px;
    border: none;
    background-color: #ef5350;
    border-radius: 4px;
    color: #fff;
    margin: 0 30px;

    :hover {
      background: ${darken(0.05, '#ef5350')};
      transition: background 0.5s;
    }
  }

  .disabled {
    background: #ddd;
    cursor: auto;

    :hover {
      background: #ddd;
      transition: background 0.5s;
    }
  }
  span {
    color: #fff;
    font-weight: bold;
    font-size: 25px;
  }
`;
