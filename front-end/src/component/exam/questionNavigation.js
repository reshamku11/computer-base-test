import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_CURRENT_QUESTION,
  MARK_FOR_REVIEW,
} from "../../redux/constants/examConstants";
import en from "../../locales/en.json";
import hi from "../../locales/hi.json";
const QuestionNavigation = () => {
  const dispatch = useDispatch();
  const { currentQuestion, questions } = useSelector(
    (state) => state.exam
  );
  const lang = useSelector((state) => state.language.language);
  const translations = lang === "hi" ? hi : en;
  return (
    <div className="d-flex justify-content-between">
      <Button
        variant="light"
        disabled={currentQuestion === 0}
        onClick={() =>
          dispatch({
            type: SET_CURRENT_QUESTION,
            payload: currentQuestion - 1,
          })
        }
      >
        {translations.previous}
      </Button>

      <div>
        <Button
          variant="warning"
          className="me-2"
          onClick={() => dispatch({ type: MARK_FOR_REVIEW })}
        >
          {translations.markReview}
        </Button>

        <Button
          variant="success"
          onClick={() =>
            dispatch({
              type: SET_CURRENT_QUESTION,
              payload:
                currentQuestion < questions.length - 1
                  ? currentQuestion + 1
                  : currentQuestion,
            })
          }
        >
          {translations.saveNext}
        </Button>
      </div>

      <Button
        variant="danger"
        onClick={() => alert("Exam Submitted")}
      >
        {translations.submit}
      </Button>
    </div>
  );
};

export default QuestionNavigation;
