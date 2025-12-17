export function alwaysReturnHelloMiddleware(storeAPI){
  return function wrapDispatch(next){
    return function handleAction(action){
      const originalResult =  next(action);
      return 'hello'
    }
  }
}
