import { createStore } from 'redux';
import rootReducder from "../reducers/index";

const store = createStore(rootReducer);

export default store;