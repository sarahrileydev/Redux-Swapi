import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";

const initialState = {
  characters: [
    {
      name: "Luke"
    },
    {
      name: "Darth Vader"
    }
  ],
  error: "",
  isLoading: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_START:
      return {
        ...state,
        error: "",
        isLoading: true
      };

    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        characters: action.payload
      };

    default:
      return state;
  }
};
