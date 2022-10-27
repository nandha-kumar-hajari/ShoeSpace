import {SAVE_CATALOG_PRODUCTS} from '../actions/types';

const initialState = {
  catalogProducts: [],
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_CATALOG_PRODUCTS:
      return {
        ...state,
        catalogProducts: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
