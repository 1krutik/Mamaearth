const arr = [];
export const myReducer = (state = arr, action) => {
  switch (action.type) {
    case "ADD": {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item + 1, price: item.price + item.unitPrice }
            : item
        );
      }
      return [
        ...state,
        {
          ...action.payload,
          qty: 1,
          unitPrice: action.payload.price,
          
          price: action.payload.price,
        },
      ];
    }
    case "INC": {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    }
    case "DEC": {
      return state.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    }
    case "REMOVE": {
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};
