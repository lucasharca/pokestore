import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import { setSearchValue } from '../../store/modules/search/actions';

import { Container, Content } from './styles';
import logo from '../../assets/images/logo.png';
import Icon from '../../assets/images/poke-ball-png-4.png';

export default function Header() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    dispatch(setSearchValue(search));
  }

  return (
    <Container>
      <Content>
        <div>
          <span>
            <Link to="/">
              <img src={Icon} alt="pokeball" />
            </Link>
          </span>
          <span>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </span>
        </div>
        <form onSubmit={handleSearch}>
          <input
            placeholder="Pesquisar..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </Content>
    </Container>
  );
}
