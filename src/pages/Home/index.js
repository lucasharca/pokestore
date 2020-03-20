import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import api from '../../services/api';

import dexNumber from '../../util/dexNumber';

import PokeShadow from '../../assets/images/poke-shadow.png';
import { ProductList, Container, ProductContainer, Pagination } from './styles';

import { addToCartRequest } from '../../store/modules/cart/actions';

import Cart from '../../components/Cart';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(9);

  const products = useSelector(state => state.cart.products);
  const searchString = useSelector(state => state.search.pokemon);

  const productInCart = (productName, cart) => {
    if (cart.find(p => p.name === productName)) {
      return 'inCart';
    }
    return 'notInCart';
  };

  const dispatch = useDispatch();

  function handleAddProduct(product) {
    dispatch(addToCartRequest(product));
  }

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get('type/10/');
      const data = response.data.pokemon.map(item => ({
        ...item,
        number: dexNumber(item.pokemon.url),
      }));
      setPokemon(data);
    }
    getPokemon();
  }, []);

  function changePage(num) {
    if (num > 0) {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
    setFirstIndex(firstIndex + num);
    setLastIndex(lastIndex + num);
  }

  return (
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
                    {productInCart(product.pokemon.name, products) === 'inCart'
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
            onClick={() => changePage(-10)}
            disabled={firstIndex <= 0}
          >
            <FaLessThan />
          </button>
          <span>{page}</span>
          <button
            type="button"
            onClick={() => changePage(10)}
            disabled={lastIndex >= pokemon.length}
          >
            <FaGreaterThan />
          </button>
        </div>
      </Pagination>
    </Container>
  );
}
