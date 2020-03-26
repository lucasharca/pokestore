import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import modal from './modal/sagas';

export default function* rootSaga() {
  return yield all([cart, modal]);
}
