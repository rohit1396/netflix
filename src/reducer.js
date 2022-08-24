export const initialState = {
  continueWatching: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CONTINUEWATCH":
      let existItem = state.continueWatching.find(
        (elem) => elem.id === action.item.id
      );

      if (existItem) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          continueWatching: [
            ...state.continueWatching.unshift(action.item),
            action.item,
          ],
        };
      }
      break;
    default:
      return state;
  }
};

export default reducer;
