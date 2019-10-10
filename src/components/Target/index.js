import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal';
import { Container, Circle } from './styles';

export default function Target() {
  const target = useSelector(state => state.hotspotReducer.target);
  const openModal = useSelector(state => state.hotspotReducer.openModal);

  return (
    <Container data={target}>
      <Circle />
      {openModal && <Modal />}
    </Container>
  );
}
