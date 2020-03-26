import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/modules/cart/actions';

import { showModal } from '../../store/modules/modal/actions';

import { Container, PokeContainer, Header, Footer, TotalCount } from './styles';

import pokeShadow from '../../assets/images/poke-shadow.png';

export default function Cart() {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  function handleRemoveProduct(id) {
    dispatch(removeFromCart(id));
  }

  const prices = products.map(product => product.price);
  const subTotal =
    products.length > 0
      ? prices
          .reduce(function(Acumulador, valorAtual) {
            return Acumulador + valorAtual;
          })
          .toFixed(2)
      : 0;

  return (
    <Container>
      <Header>
        <div className="headDiv"> Carrinho </div>
        {products.map(product => (
          <PokeContainer key={product.name}>
            <div>
              <div>
                <span>
                  <img
                    src={
                      product.dexNum < 10091 ? product.avatarUrl : pokeShadow
                    }
                    alt=""
                  />
                </span>
              </div>
              <div>{product.name}</div>
            </div>
            <div>
              <span>{product.price}</span>
              <span>
                <button
                  type="button"
                  onClick={() => {
                    handleRemoveProduct(product.dexNum);
                  }}
                >
                  X
                </button>
              </span>
            </div>
          </PokeContainer>
        ))}
      </Header>
      <Footer>
        <TotalCount>
          <span>Total:</span>
          <span>{subTotal > 0 ? `R$${subTotal}` : 'R$0.00'}</span>
        </TotalCount>
        <div>
          <button
            type="button"
            disabled={products.length <= 0}
            className={products.length <= 0 ? 'disabled' : null}
            onClick={() => dispatch(showModal())}
          >
            Finalizar Compra
          </button>
        </div>
      </Footer>
    </Container>
  );
}
