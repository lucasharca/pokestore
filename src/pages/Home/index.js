import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import api from '../../services/api';

import dexNumber from '../../util/dexNumber';

import PokeShadow from '../../assets/images/poke-shadow.png';
import {
  ProductList,
  Container,
  ProductContainer,
  Pagination,
  Wrapper,
} from './styles';

import { addToCartRequest } from '../../store/modules/cart/actions';

import Cart from '../../components/Cart';

export default function Home({ changeTheme }) {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonCopy, setPokemonCopy] = useState([]);
  const [page, setPage] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(9);
  const { typeNumber } = useContext(ThemeContext);

  const products = useSelector(state => state.cart.products);
  const searchString = useSelector(state => state.search.pokemon);
  const dispatch = useDispatch();

  const productInCart = useCallback((productName, cart) => {
    if (cart.find(p => p.name === productName)) {
      return 'inCart';
    }
    return 'notInCart';
  }, []);

  const handleAddProduct = useCallback(
    product => {
      dispatch(addToCartRequest(product));
    },
    [dispatch]
  );

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`type/${typeNumber}/`);
      const data = response.data.pokemon.map(item => ({
        ...item,
        number: dexNumber(item.pokemon.url),
      }));
      setPokemon(data);
      setPokemonCopy(data);
    }
    getPokemon();
  }, [page, pokemonCopy]);

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
      setFirstIndex(0);
      setLastIndex(9);
    }
    const searchedPokemon = pokemonCopy.filter(item =>
      item.pokemon.name.includes(searchString.toLowerCase())
    );
    if (searchedPokemon.length === 0) {
      return setPokemon(pokemonCopy);
    }
    return setPokemon(searchedPokemon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  const pageUp = useCallback(() => {
    setPage(page + 1);
    setFirstIndex(firstIndex + 10);
    setLastIndex(lastIndex + 10);
  }, [page]);

  const pageDown = useCallback(() => {
    setPage(page - 1);
    setFirstIndex(firstIndex - 10);
    setLastIndex(lastIndex - 10);
  }, [page]);

  const handleThemeChange = useCallback(() => {
    setPage(1);
    setFirstIndex(0);
    setLastIndex(9);
    changeTheme();
  }, [changeTheme]);

  return (
    <Wrapper>
      <button type="button" onClick={handleThemeChange}>
        Trocar Loja
      </button>
      <Container>
        <ProductContainer>
          <ProductList>
            {pokemon
              .map(product => (
                <li key={product.pokemon.name}>
                  <img
                    src={
                      product.number < 10091
                        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${product.number}.png`
                        : PokeShadow
                    }
                    alt={product.pokemon.name}
                  />
                  <strong> {product.pokemon.name}</strong>
                  <span> R$4,99 </span>

                  <button
                    type="button"
                    onClick={() =>
                      handleAddProduct({
                        name: product.pokemon.name,
                        number: product.number,
                      })
                    }
                    className={productInCart(product.pokemon.name, products)}
                  >
                    <span>
                      {productInCart(product.pokemon.name, products) ===
                      'disabled'
                        ? 'NO CARRINHO'
                        : 'ADICIONAR AO CARRINHO'}
                    </span>
                  </button>
                </li>
              ))
              .slice(firstIndex, lastIndex)}
          </ProductList>
        </ProductContainer>
        <Cart />
        <Pagination>
          <div>
            <button
              type="button"
              onClick={pageDown}
              disabled={firstIndex <= 0}
              className={firstIndex <= 0 ? 'disabled' : null}
            >
              <FaLessThan />
            </button>
            <span>{page}</span>
            <button
              type="button"
              onClick={pageUp}
              disabled={lastIndex >= pokemon.length}
              className={lastIndex >= pokemon.length ? 'disabled' : null}
            >
              <FaGreaterThan />
            </button>
          </div>
        </Pagination>
      </Container>
    </Wrapper>
  );
}
