import axios from "axios";

export const FETCH_QUESTIONS_REQUEST = "FETCH_QUESTIONS_REQUEST";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_FAIL = "FETCH_QUESTIONS_FAIL";

export const fetchQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_QUESTIONS_REQUEST });

    const { data } = await axios.get("/questions.json"); 
    // Make sure questions.json is inside public folder

    dispatch({
      type: FETCH_QUESTIONS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: FETCH_QUESTIONS_FAIL,
      payload: error.message,
    });
  }
};
