import React, {craeteContext, useReducer, userContext} from 'react';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState
}from './asyncActionUtils';
import * as api from './api';

const initialState = {
  users:initialAsyncState,
  user:initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS','users');
const userHandler = createAsyncHandler('GET_USER', 'user');

const loadingState ={
  loading:true,
  data:null,
  error:null
}

const success = data=>({
  loading:false,
  data:null,
  error:error
});

function usersReducer(state, action){
  switch(action.type){
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':      
        return usersHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UserStateContext = craeteContext(null);
const UserDispatchContext = craeteContext(null);

export function UsersProvider({children}){
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export function useUserState(){
  const state = useContext(UserStateContext);
  if(!state){
    throw new Error("Can't find UsersProvider");
  }
  return state;
}

export function useUsersDispatch(){
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch){
    throw new Error("Can't find UsersProvider");
  }
  return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);