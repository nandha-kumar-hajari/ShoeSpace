import {SAVE_CART_DATA, SAVE_CATALOG_PRODUCTS} from '../actions/types';

const initialState = {
  catalogProducts: [
    {
      id: 0,
      brandName: 'Adidas',
      productName: 'Sneaker',
      price: '830',
      imageUrl: 'https://i.ibb.co/tMnJjZ5/nike2.png',
      description:
        'Take on everyday challenges in the the Nike Defy All Day. Leather up top and rubber traction on the bottom create a durable design that lasts the rigors of tough training sessions. Soft cushioning carries comfort through your workoutor throughout a day of getting things done.',
    },
    {
      id: 1,
      brandName: 'Puma',
      productName: 'Mens casual shoes',
      price: '900',
      imageUrl: 'https://i.ibb.co/pZX5Vy8/puma.png',
      description:
        'Nike Revolution 6 Next Nature Mens Road Running Shoes VERSATILE COMFORT WITH FLEXIBLE CUSHIONING. Here iss to new beginnings.',
    },
  ],

  cartData: [],
};

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_CATALOG_PRODUCTS:
      return {
        ...state,
        catalogProducts: action.payload,
      };

    case SAVE_CART_DATA:
      return {
        ...state,
        cartData: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
