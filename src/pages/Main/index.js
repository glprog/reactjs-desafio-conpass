/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTargetFocus } from '../../store/modules/hotspot/actions';

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

  return (
    <Container>
      <ButtonCreate onClick={handleGetCapture}>Create Hotspot</ButtonCreate>

      <Content>
        <TitleList>List of hotspots</TitleList>
        <List>
          {data.map(h => (
            <ListItem key={h.id}>
              <p>Hotspot #{h.id}</p>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}
