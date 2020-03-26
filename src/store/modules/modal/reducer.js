import produce from 'immer';

const INITIAL_STATE = {
  modal: false,
  clear: true,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/MODAL_SHOW':
      return produce(state, draft => {
        draft.modal = true;
      });

    case '@cart/MODAL_HIDE':
      return produce(state, draft => {
        draft.modal = false;
        draft.clear = action.clear;
      });

    default:
      return state;
  }
}
