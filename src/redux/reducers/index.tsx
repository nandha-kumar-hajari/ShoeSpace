import {SAVE_CATALOG_PRODUCTS} from '../actions/types';

const initialState = {
  catalogProducts: [
    {
      id: 0,
      brandName: 'Adidas',
      productName: 'Sneaker',
      price: '830',
      imageUrl: 'https://i.ibb.co/tMnJjZ5/nike2.png',
    },
    {
      id: 1,
      brandName: 'Puma',
      productName: 'Mens casual shoes',
      price: '900',
      imageUrl: 'https://i.ibb.co/pZX5Vy8/puma.png',
    },
  ],
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
