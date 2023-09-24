import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  dbLength: null,
  products: new Array(),
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, isError: true, errMessage: payload };
    }

    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        products: payload.data,
        dbLength: payload.headers.get("x-total-count"),
      };
    }

    case ADD_PRODUCT: {
      return { ...state, isLoading: false };
    }

    case EDIT_PRODUCT: {
      return { ...state, isLoading: false };
    }

    case DELETE_PRODUCT: {
      return { ...state, isLoading: false };
    }

    default: {
      return state;
    }
  }
};
