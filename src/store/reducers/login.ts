import {createReducer} from '@reduxjs/toolkit';
import {
  emailLoginFailure,
  emailLoginRequest,
  emailLoginSuccess,
} from '../actions/login';

const initialState: {
  isLoading: boolean;
  data: any;
} = {
  isLoading: false,
  data: {},
};

export const login = createReducer(initialState, builder => {
  builder.addCase(emailLoginRequest, state => ({
    ...state,
    isLoading: true,
  }));
  builder.addCase(emailLoginSuccess, state => ({
    ...state,
    data: {loginStatus: 'success'},
    isLoading: false,
  }));
  builder.addCase(emailLoginFailure, state => ({
    ...state,
    data: {loginStatus: 'fail'},
    isLoading: false,
  }));
});
