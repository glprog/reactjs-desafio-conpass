/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setTargetFocus,
  deleteHotspot,
} from '../../store/modules/hotspot/actions';

import {
  Container,
  ButtonCreate,
  Content,
  TitleList,
  List,
  ListItem,
} from './styles';

export default function Main() {
  const data = useSelector(state => state.hotspotReducer.lists);
  const dispatch = useDispatch();

  function handleGetCapture() {
    dispatch(setTargetFocus());
  }

  function handleDelete(id) {
    dispatch(deleteHotspot(id));
  }

  return (
    <Container>
      <ButtonCreate onClick={handleGetCapture}>Create Hotspot</ButtonCreate>

      <Content>
        <TitleList>List of hotspots</TitleList>
        <List>
          {data.map(h => (
            <ListItem key={h.id}>
              <p>Hotspot #{h.id}</p>
              <button type="submit" onClick={() => handleDelete(h.id)}>
                Deletar
              </button>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}
