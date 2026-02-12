import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAIL,
} from "../constants/examConstants";

export const fetchQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_QUESTIONS_REQUEST });

    const data11 = [
      {
        id: 1,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      {
        id: 2,
        question: "Capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi",
      },
    ];

    const data =  [
      {
        "id": 1,
        "question": {
          "en": "What is 2 + 2?",
          "hi": "2 + 2 कितना होता है?"
        },
        "options": {
          "en": ["3", "4", "5", "6"],
          "hi": ["3", "4", "5", "6"]
        },
        "answer": "4"
      },
      {
        "id": 2,
        "question": {
          "en": "Capital of India?",
          "hi": "भारत की राजधानी क्या है?"
        },
        "options": {
          "en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
          "hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"]
        },
        "answer": "Delhi"
      }
    ]

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
