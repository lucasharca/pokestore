import { select, put, all, takeLatest } from 'redux-saga/effects';

import { clearCart } from '../cart/actions';

function* emptyCart() {
  const clear = yield select(state => state.modal.clear);
  if (clear) {
    yield put(clearCart());
  }
}

export default all([takeLatest('@cart/MODAL_HIDE', emptyCart)]);
