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