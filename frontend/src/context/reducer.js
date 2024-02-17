const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        isLoading: false,
        query: action.payload,
      };

    case "PREV_PAGE":
      let pageNum = state.page;
      if(pageNum <= 0) {
        pageNum = 0
      }else{
        pageNum = state.page - 1
      }
      return {
        ...state,
        page: pageNum,
      };

    case "NEXT_PAGE":
      let newPage = state.page + 1;
      if(newPage >= state.nbPages) {
        newPage = 0
      }
      return {
        ...state,
        page: newPage,
      };
    default:
      return state;
  }
};

export default reducer;
