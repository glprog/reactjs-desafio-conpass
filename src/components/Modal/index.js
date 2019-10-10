import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uniqueId } from 'lodash';

import { setElementPosition } from '../../store/modules/hotspot/actions';

import { Container, Content } from './styles';

export default function Modal() {
  const dispatch = useDispatch();
  const mouseTarget = useSelector(state => state.hotspotReducer.target);
  const elementTarget = useSelector(
    state => state.hotspotReducer.targetElement
  );

  const [title, setTitle] = useState('');

  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const id = uniqueId();
    const list = { id, title, mouseTarget, elementTarget };
    dispatch(setElementPosition(list));
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Container>
  );
}
