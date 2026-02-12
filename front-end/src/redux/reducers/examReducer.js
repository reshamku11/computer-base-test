import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAIL,
  SET_CURRENT_QUESTION,
  SAVE_ANSWER,
  MARK_FOR_REVIEW,
} from "../constants/examConstants";

const initialState = {
  loading: false,
  questions: [],
  error: null,
  currentQuestion: 0,
  answers: {},
  review: {},
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true };

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };

    case FETCH_QUESTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };

    case SAVE_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [state.currentQuestion]: action.payload,
        },
        review: {
          ...state.review,
          [state.currentQuestion]: false,
        },
      };

    case MARK_FOR_REVIEW:
      return {
        ...state,
        review: {
          ...state.review,
          [state.currentQuestion]: true,
        },
      };

    default:
      return state;
  }
};

export default examReducer;
