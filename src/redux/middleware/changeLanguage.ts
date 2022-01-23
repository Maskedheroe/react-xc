import { Middleware } from "redux"
import { CHANGE_LANGUAGE } from '../language/languageActions';
import i18n from 'i18next';

export const changeLanguage: Middleware = (store) => (next) => (action) => {
  if (action.type === CHANGE_LANGUAGE) {
    i18n.changeLanguage(action.payload)
  }
  next(action)
}
