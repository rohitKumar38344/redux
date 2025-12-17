export function delayedMessageMiddleware(storeAPI){
  return function dispatchWrapper(next){
    return function handleAction(action){
      if(action.type === 'todos/todoAdded'){
        setTimeout(() => console.log('Todo added: ',action.payload), 1000);
      }
      return next(action)
    }
  }
}