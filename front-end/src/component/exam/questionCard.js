import React, { useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/actions/examActions";
import { SAVE_ANSWER } from "../../redux/constants/examConstants";

const QuestionCard = () => {
  const dispatch = useDispatch();

  const { loading, questions, error, currentQuestion, answers } =
    useSelector((state) => state.exam);
  const lang = useSelector((state) => state.language.language);

  console.log(lang, "hello")
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>{error}</h4>;
  if (!questions.length) return <h4>No Questions Available</h4>;

  const question = questions[currentQuestion];

  return (
    <Card className="shadow">
      <Card.Body>
        <h5>{question.question[lang]}</h5>

        <Form>
          {question.options[lang].map((opt, index) => (
            <Form.Check
              key={index}
              type="radio"
              label={opt}
              name="option"
              checked={answers[currentQuestion] === opt}
              onChange={() =>
                dispatch({
                  type: SAVE_ANSWER,
                  payload: opt,
                })
              }
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
