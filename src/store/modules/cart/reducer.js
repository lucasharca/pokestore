import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  modal: false,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.products.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          p => p.dexNum === action.id
        );

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });

    case '@cart/CLEAR':
      return produce(state, draft => {
        draft.products = [];
      });

    default:
      return state;
  }
}
