import React from 'react';
import { useSelector } from 'react-redux';

import Logo from '../../assets/logo.png';

import { Container, Link } from './styles';

export default function Header() {
  const focus = useSelector(state => state.hotspotReducer.focus);

  return (
    <Container focus={focus}>
      <img src={Logo} alt="Conpass" />

      <ul>
        <Link focus={focus}>Link 1</Link>
        <Link focus={focus}>Link 2</Link>
        <Link focus={focus}>Link 3</Link>
        <Link focus={focus}>Link 4</Link>
      </ul>
    </Container>
  );
}
