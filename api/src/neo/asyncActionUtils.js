export default function createAsyncDispatcher(type, promiseFn){
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;
  async function actionHandler(dispatch, ...rest){
    dispatch({type});
    try{
      const data = await promiseFn(...rest);
      dispatch({
        type: SUCCESS,
        data
      });
    }
    catch(e){
      dispatch({
        type:ERROR,
        error:e
      });
    }
  }
  return actionHandler;
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error:null
};

const error = error =>({
  loading:false,
  data:null,
  error:error
});

export function createAsyncHandler(type, key){
  const SUCCESS = `${type}_SUCCESS`;
  const ERROR = `${type}_ERROR`;

  function handler(state, action){
    switch(action.type){
      case type:
        return{
          ...state,
          [key]:loadingState
        };
      case SUCCESS:
        return{
            ...state,
            [key]:success(action.data)
        };
      case ERROR:
        return{
            ...state,
            [key]:error(action.error)
        };
      default:
        return state;
    }
  }
  return handler;
}