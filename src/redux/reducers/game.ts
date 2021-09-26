import { ActionTypes } from '../actions';
import { InitializeGame } from '../../lib/Game';

/** Holds initial state */
const initialState: GameState = {
  ...InitializeGame(),
};

const gameReducer = (
  state: GameState = initialState,
  action: ReduxAction
): GameState => {
  const { items, PacmanStore } = state;

  let newMove;

  switch (action.type) {
    case ActionTypes.INIT:
      return { ...InitializeGame(action.payload.x, action.payload.y, action.payload.dir) };

    case ActionTypes.SET_ITEMS:
      return { ...state, ...action.payload };

    case ActionTypes.TIC:
      newMove = PacmanStore.getNextMove();
      if (newMove) {
        PacmanStore.move(newMove.piece, newMove.direction);
      } 
      return { ...state, items };

    default:
      return state;
  }
};

export default gameReducer;
