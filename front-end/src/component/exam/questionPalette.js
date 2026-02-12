import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const QuestionPalette = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestion, answers, review } =
    useSelector((state) => state.exam);

  return (
    <>
      <h6>Question Palette</h6>
      <div className="d-flex flex-wrap gap-2">
        {questions.map((_, i) => {
          let variant = "outline-primary";

          if (answers[i]) variant = "success";
          if (review[i]) variant = "warning";
          if (currentQuestion === i) variant = "primary";

          return (
            <Button
              key={i}
              variant={variant}
              size="sm"
              style={{ width: "45px" }}
              onClick={() =>
                dispatch({
                  type: "SET_CURRENT_QUESTION",
                  payload: i,
                })
              }
            >
              {i + 1}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default QuestionPalette;
