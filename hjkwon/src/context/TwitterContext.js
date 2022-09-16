import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import twitterReducer from "./TwitterReducer";

const TwitterContext = createContext();

/** 최상위 컴포넌트 */
export const TwitterProvider = ({ children }) => {
  const initialState = {
    user: {},
    userData: [],
    searchData: [],
    data: [],
    loading: false,
  };

  const fetchInfos = async () => {
    //db.json의 user, data를 한번에 불러와 context에 저장
    const response = await axios.all([
      axios.get("http://localhost:8000/user"),
      axios.get("http://localhost:8000/data"),
    ]);
    dispatch({ type: "INIT_USER", payload: response[0].data });
    dispatch({ type: "INIT_DATA", payload: response[1].data });
  };

  //mount시에 작동
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
