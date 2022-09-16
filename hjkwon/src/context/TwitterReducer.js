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
      const filteredData = action.payload.filter(
        (item) =>
          item.info.id === state.user.id ||
          item.retweet.indexOf(state.user.id) !== -1
      );

      return {
        ...state,
        data: action.payload,
        userData: filteredData,
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
        data: state.data.map((ele) => {
          if (ele.id === action.payload.id) {
            return {
              ...ele,
              [action.payload.category]: action.payload.data,
            };
          } else return ele;
        }),
      };
    default:
      return state;
  }
};

export default twitterReducer;
