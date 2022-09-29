const twitterReducer = (state, action) => {
  switch (action.type) {
    /** user데이터 context에 저장 */
    case "INIT_USER":
      return {
        ...state,
        user: action.payload,
      };
    /** data데이터 context에 저장 */
    case "INIT_DATA":
      return {
        ...state,
        data: action.payload,
      };
    /** tweet 추가 */
    case "ADD_TWEET":
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    /** tweet 삭제 */
    case "DELETE_TWEET":
      return {
        ...state,
        data: state.data.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    /** 리트윗, 좋아요 업데이트 */
    case "UPDATE_TWEET":
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              [action.payload.category]: action.payload.data,
            };
          } else return item;
        }),
      };
    case "SEARCH_TWEET":
      const regExp = new RegExp(action.payload, "i");
      return {
        ...state,
        searchData: state.data.filter((item) => {
          return (
            regExp.test(item.info.id) ||
            regExp.test(item.content) ||
            regExp.test(item.info.name)
          );
        }),
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searchData: [],
      };
    default:
      return state;
  }
};

export default twitterReducer;
