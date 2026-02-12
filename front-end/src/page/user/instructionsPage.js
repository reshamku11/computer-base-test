import React from "react";
import { useSelector } from "react-redux";
import en from "../../locales/en.json";
import hi from "../../locales/hi.json";
import LanguageSwitcher from "../../component/languageSwitcher";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const InstructionsPage = () => {
  const navigate = useNavigate();
  const lang = useSelector((state) => state.language.language);
  const t = lang === "en" ? en : hi;

  return (
    <>
      <LanguageSwitcher  padding={3}/>

      <Container>
        <h2>{t.instructionsTitle}</h2>
        <p>{t.generalInstructions}</p>

        <h4>{t.timeManagementTitle}</h4>
        <ul>
          {t.timeManagementPoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h4>{t.examRulesTitle}</h4>
        <ul>
          {t.examRulesPoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h4>{t.cbtFeaturesTitle}</h4>
        <ul>
          {t.cbtFeaturesPoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <Button onClick={() => navigate("/User/ExamPage")}>
          {t.startExam}
        </Button>
      </Container>
    </>
  );
};

export default InstructionsPage;
