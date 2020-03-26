import { combineReducers } from 'redux';

import cart from './cart/reducer';
import search from './search/reducer';
import modal from './modal/reducer';

export default combineReducers({
  cart,
  search,
  modal,
});
