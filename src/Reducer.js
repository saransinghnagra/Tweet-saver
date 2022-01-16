const Reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TWIT_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_TWIT_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_TWIT_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return newState;
  }
};

export default Reducer;
