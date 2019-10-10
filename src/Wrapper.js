import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header';
import Main from './pages/Main';
import Target from './components/Target';

import {
  setTargetPosition,
  setTargetPositionElement,
  openModal,
} from './store/modules/hotspot/actions';

export default function Wrapper() {
  const [mousePosition, setPositionMouse] = useState();

  const dispatch = useDispatch();
  const focus = useSelector(state => state.hotspotReducer.focus);
  const stopPropagation = useSelector(
    state => state.hotspotReducer.stopPropagation
  );

  function handleMouseMoviment(e) {
    if (focus === false) {
      return;
    }

    if (stopPropagation === false) {
      const { x, y } = e.nativeEvent;
      const positions = { x, y };
      setPositionMouse(positions);
    }
  }

  function handleClickCapture(e) {
    if (focus === false) {
      return;
    }

    const elementPosition = e.nativeEvent.toElement.getBoundingClientRect();
    dispatch(setTargetPosition(mousePosition));

    dispatch(setTargetPositionElement(elementPosition));
    dispatch(openModal());
  }

  return (
    <div
      onMouseMoveCapture={e => handleMouseMoviment(e)}
      onClickCapture={e => handleClickCapture(e)}
    >
      <Target />

      <Header />
      <Main />
    </div>
  );
}
