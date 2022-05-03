import { createContext, useReducer } from "react";


const initialState = {
  currentWord: 0,
  wordStatus: [],
  gameDuration: 0,
  whenGameStarted: 0,
  isGameStarted: false,
  currentLetterIndex: 0,
  isCurrentWordRight: null,
  isCurrentLetterRight: null,
  totalRightKeyPresses: 0,
  totalWrongKeyPresses: 0
};

function reducer(state, action) {
  switch(action.type) {
    case "updateCurrentWord": 
      state.currentWord = action.value;
      return {...state};

    case "updateLetterIndex": 
      state.currentLetterIndex = action.value;
      return {...state};

    case "updateCurrentLetterIsRight":
      state.isCurrentLetterRight = action.value;
      return {...state};

    case "updateCurrentWordIsRight":
      state.isCurrentWordRight = action.value;
      state.wordStatus = [...state.wordStatus, action.value];
      return {...state};

    case "updateTotalRightKeyPresses":
      state.totalRightKeyPresses = action.value;
      return {...state};

    case "updateTotalWrongKeyPresses":
      state.totalWrongKeyPresses = action.value;
      return {...state};

    case "updateGameIsStarted":
      state.isGameStarted = action.value;
      return {...state};

    case "updateWhenGameStarted":
      state.whenGameStarted = action.value;
      return {...state};

    case "updateGameDuration":
      state.gameDuration = action.value;
      return {...state};

    default:
      throw new Error(`${action.type} Unkown reducer action`);
  }
}


export const GameContext = createContext({});

export function GameProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <GameContext.Provider value={{state, dispatch}}>
      {children}
    </GameContext.Provider>
  )
}