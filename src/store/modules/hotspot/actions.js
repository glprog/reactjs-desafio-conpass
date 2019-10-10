export function setElementPosition(data) {
  return {
    type: '@hotspot/ADD_ELEMENT',
    payload: data,
  };
}

export function setTargetPosition(data) {
  return {
    type: '@hotspot/SET_TARGET_POSITION',
    payload: data,
  };
}
export function setTargetPositionElement(data) {
  return {
    type: '@hotspot/SET_TARGET_POSITION_ELEMENT',
    payload: data,
  };
}

export function setTargetFocus() {
  return {
    type: '@hotspot/ADD_TARGET_FOCUS',
  };
}
export function openModal() {
  return {
    type: '@hotspot/OPEN_MODAL',
  };
}
