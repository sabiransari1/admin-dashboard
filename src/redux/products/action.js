import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCTS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "../actionTypes";
import axios from "axios";

const URL = "https://admin-dashboard-server-sabiransari1.onrender.com/";

export const getProducts = (paramObj) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const products = await axios.get(`${URL}products`, paramObj);
    dispatch({ type: GET_PRODUCTS, payload: products.data });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const products = await axios.post(`${URL}products`, product);
    dispatch({ type: ADD_PRODUCT });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};
export const editProduct = (id, editData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const products = await axios.patch(`${URL}products/${id}`, editData);
    dispatch({ type: EDIT_PRODUCT });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const products = await axios.delete(`${URL}products/${id}`);
    dispatch({ type: DELETE_PRODUCT });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAILURE, payload: error.message });
  }
};
