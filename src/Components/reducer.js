export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
  // access code from url
  //   token:
  //     "BQDEZoDH3wH0P9wfIhuBGHWvVxt83dhoBntlvCpC0Nm707mTaKXVZjLF47PAxxZlz2bFqEUrmEZR-M-iMCHZjEEFxIHLfJFRmpYof7etLOXmudsHWr_m6896zavPzDmCN2_mx8904XAdJ-2Ev5H7Juk2Z9ZzRzAiqlnYvSY6Awrqztwwefk6zuE"
};

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_Weekly: action.discover_Weekly
      };
    default:
      return state;
  }
};

export default reducer;
