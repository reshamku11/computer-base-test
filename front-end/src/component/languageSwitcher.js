import React from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/actions/languageActions.js";
import { Button } from "react-bootstrap";

const LanguageSwitcher = ({padding}) => {
  const dispatch = useDispatch();

  return (
    <div className={`text-end p-${padding}`}>
      <Button size="sm" onClick={() => dispatch(setLanguage("en"))}>
        English
      </Button>{" "}
      <Button size="sm" onClick={() => dispatch(setLanguage("hi"))}>
        हिंदी
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
