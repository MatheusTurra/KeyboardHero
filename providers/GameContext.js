import { createContext, useReducer } from "react";


const initialState = {
  currentWord: 0,
  currentLetterIndex: 0,
  isCurrentWordRight: null,
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

    case "updateCurrentWordIsRight":
      state.isCurrentWordRight = action.value;
      return {...state};

    case "updateTotalRightKeyPresses":
      state.totalRightKeyPresses = action.value;
      return {...state}

    case "updateTotalWrongKeyPresses":
      state.totalWrongKeyPresses = action.value;
      return {...state}

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