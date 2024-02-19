// Define action types
const ActionTypes = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    RESET: 'RESET'
  };
  
  // Define reducer function
  function reducer(state = { count: 0 }, action) {
    switch (action.type) {
      case ActionTypes.ADD:
        return { count: state.count + 1 };
      case ActionTypes.SUBTRACT:
        return { count: state.count - 1 };
      case ActionTypes.RESET:
        return { count: 0 };
      default:
        return state;
    }
  }
  
  // Create store
  function createStore(reducer) {
    let state = undefined;
    let listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    };
  
    dispatch({}); // Initialize state
  
    return { getState, dispatch, subscribe };
  }
  
  // Create store instance
  const store = createStore(reducer);
  
  // Subscribe to store changes
  const unsubscribe = store.subscribe(() => {
    console.log("Current count:", store.getState().count);
  });
  
  // Test scenarios
  store.dispatch({ type: ActionTypes.ADD });
  store.dispatch({ type: ActionTypes.ADD });
  store.dispatch({ type: ActionTypes.SUBTRACT });
  store.dispatch({ type: ActionTypes.RESET });
  
  // Unsubscribe when done
  unsubscribe();
  