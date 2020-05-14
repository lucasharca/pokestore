import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';

import { useChange } from '../../hooks/Change';

export default function Main() {
  const { changeStore } = useChange();

  return (
    <Wrapper>
      <Container>
        <div>Escolha a sua loja</div>
        <div>
          <Link to="/home">
            <button
              className="fire"
              type="button"
              onClick={() => changeStore('fire')}
            >
              Fogo
            </button>
          </Link>
          <Link to="/home">
            <button
              className="water"
              type="button"
              onClick={() => changeStore('water')}
            >
              Água
            </button>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
}
