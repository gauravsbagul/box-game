const initialState = {
  coupons: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_COUPON":
      return {
        ...state,
        coupons: [...state.coupons, action.coupon],
      };
      break;

    default:
      return state;
      break;
  }
};
export default rootReducer;
