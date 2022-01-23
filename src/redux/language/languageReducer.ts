import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionTypes } from './languageActions';

export interface languageState {
  language: "en" | "zh"
  languageList: {
    name: string
    code: string
  }[]
}

const initialState: languageState = {
  language: "zh",
  languageList: [
    {
      name: "中文",
      code: "zh",
    },
    {
      name: "English",
      code: "en",
    },
  ],
}

// 这是一个reducer的雏形，reducer是一个数据处理过程(一个以旧换新的过程)
export default (state: languageState = initialState, action: LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload],
      }
    default:
      return state
  }
}
