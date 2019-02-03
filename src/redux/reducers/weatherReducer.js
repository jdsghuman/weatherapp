const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_WEATHER':
      return [...state,
          action.payload.data];
    default:
      return state;
  }
}

export default weatherReducer;