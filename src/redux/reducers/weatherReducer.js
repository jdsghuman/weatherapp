const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_WEATHER':
      return [...state,
          action.payload.data];
    case 'REMOVE_CITY':
        return state.filter(item => item.city.id !== action.payload);
    default:
      return state;
  }
}

export default weatherReducer;