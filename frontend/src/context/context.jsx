import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const data = response.data;
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  };

  const setQuery = (newQuery) => {
    dispatch({ type: "SET_QUERY", payload: newQuery });
  };

  //Pagination

  const prevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };
  
  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  }

  useEffect(() => {
    fetchData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, setQuery, prevPage, nextPage }}>
      {children}
    </AppContext.Provider>
  );
};

// Create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
