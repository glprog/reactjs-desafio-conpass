import produce from 'immer';

const INITIAL_STATE = {
  target: {},
  targetElement: [],
  lists: [],
  focus: false,
  openModal: false,
  stopPropagation: false,
  setIsTarget: false,
};

export default function hotspotReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@hotspot/ADD_ELEMENT': {
        draft.lists = [...draft.lists, action.payload];
        draft.focus = false;
        draft.openModal = false;
        draft.target = {};
        draft.targetElement = [];
        draft.stopPropagation = false;
        draft.setIsTarget = false;
        break;
      }
      case '@hotspot/ADD_TARGET_FOCUS': {
        draft.focus = true;
        break;
      }
      case '@hotspot/SET_TARGET_POSITION': {
        draft.target = action.payload;
        draft.stopPropagation = true;
        draft.setIsTarget = true;
        break;
      }
      case '@hotspot/SET_TARGET_POSITION_ELEMENT': {
        draft.targetElement = [action.payload];
        break;
      }
      case '@hotspot/OPEN_MODAL': {
        draft.openModal = true;
        break;
      }
      case '@hotspot/DELETE':
        return produce(state, draft => {
          const hotspotIndex = draft.lists.findIndex(
            h => h.id === action.payload
          );

          if (hotspotIndex >= 0) {
            draft.lists.splice(hotspotIndex, 1);
          }
        });
      default:
    }
  });
}
