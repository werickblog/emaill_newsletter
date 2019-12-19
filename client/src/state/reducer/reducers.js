import {
  FETCH_NEWSLETTERS,
  FETCH_NEWSLETTER,
  ERROR,
  LOADING,
  CREATE_NEWLETTER
} from "../actions/types";

let initialState = {
  newsletter: {},
  newsletters: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWSLETTER:
      return {
        ...state,
        newsletter: action.payload.newsletter,
        isLoading: false
      };
    case FETCH_NEWSLETTERS:
      return {
        ...state,
        newsletters: action.payload.newsletters,
        isLoading: false
      };
    case CREATE_NEWLETTER:
      return {
        ...state,
        newsletters: [
          ...state.newsletters.map(item =>
            item.newsletter_id ? action.payload.newsletter : item
          )
        ],
        newsletter: action.payload,
        isLoading: false
      };
    case ERROR:
      return {
        ...state
      };
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default reducer;
