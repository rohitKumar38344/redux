export function loggerMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here
console.log('dispatching', action)
      let result =  next(action)
      console.log('next state', storeAPI.getState());
      return result;
    }
  }
}