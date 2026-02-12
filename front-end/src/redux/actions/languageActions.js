import { SET_LANGUAGE } from "../constants/languageConstants";

export const setLanguage = (lang) => (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: lang
  });
};
