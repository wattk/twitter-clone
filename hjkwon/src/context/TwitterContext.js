import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import twitterReducer from "./TwitterReducer";

const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
  const initialState = {
    user: {},
    userData: [],
    data: [],
    loading: false,
  };

  const fetchInfos = async () => {
    const response = await axios.all([
      axios.get("http://localhost:8000/user"),
      axios.get("http://localhost:8000/data"),
    ]);
    dispatch({ type: "INIT_USER", payload: response[0].data });
    dispatch({ type: "INIT_DATA", payload: response[1].data });
  };

  useEffect(() => {
    fetchInfos();
  }, []);

  const [state, dispatch] = useReducer(twitterReducer, initialState);

  return (
    <TwitterContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
};

export default TwitterContext;
