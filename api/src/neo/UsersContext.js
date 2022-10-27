import React, {craeteContext, useReducer, userContext} from 'react';

const initialState = {
  users:{
    loading: false,
    data: null,
    error:null
  },
  user:{
    loading:false,
    data:null,
    error:null
  },
};

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
      return{
        ...state,
        users:loadingState,
      };
    case 'GET_USERS_SUCCESS':
      return{
        ...state,
        users:success(action.data)
      };
    case 'GET_USERS_ERROR':
      return{
        ...state,
        users:error(action.error)
      };
    case 'GET_USER':
      return{
        ...state,
        user:loadingState
      };
    case 'GET_USER_SUCCESS':
      return{
        ...state,
        user: error(action.data)
      };
    case 'GET_USER_ERROR':
      return{
        ...state,
        usr: error(action.error)
      };
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