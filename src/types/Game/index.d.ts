interface GameBoardItemMove {
  piece: GameBoardPiece,
  direction?: GameDirection
}

interface GameBoardPosition {
  x: number,
  y: number,
  direction?: GameDirection,
}

interface GameDirectionMap {
  up: GameDirection,
  down: GameDirection,
  left: GameDirection,
  right: GameDirection,
  none: GameDirection,
  [any: string]: GameDirection
}

interface GameBoardItem {
  type: GameBoardItemType,
  setPiece?: (piece:GameBoardPiece, direction?: GameDirection) => void,
  getNextMove?: () => GameBoardItemMove | boolean,
  direction?: GameDirection | boolean,
  backgroundItem?: GameBoardItem | false,
}

interface GameBoardPieceState {
  value: GameBoardPiece
}
  
interface GameBoardItemMoves {
  right?: GameBoardPiece,
  left?: GameBoardPiece,
  up?: GameBoardPiece,
  down?: GameBoardPiece,
  [any: string]: GameBoardPiece,
}

interface KeyToGameDirection {
  [any: string]: string,
}

interface GameDirectionToKeys {
  [any: GameDirection]: string,
}

interface GameBoardPiece {
  id: string,
  type: GameBoardPieceType,
  x: number,
  y: number,
  moves: GameBoardItemMoves,
}
  
interface GameState {
  items: GameBoardItem[][],
  layout: GameBoardPiece[][],
  PacmanStore?: Pacman,
}


interface ReduxState {
  game: GameState;
}

interface ReduxAction {
  type: ActionTypes;
  payload?: any;
}