import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET_REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  register_success: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        register_success: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register_success: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };
    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default authReducer;