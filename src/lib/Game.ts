import { GameBoardItemType, GameBoardPieceType } from './Map';
import Pacman from './game/Pacman';

/** Enumerate the board pieces */
enum gameMap {
  WALL    = 0,
  EMPTY   = 2,
  PACMAN  = 5,
};
  
/** Holds the gameBoard state */
const gameBoard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 0],
  [0, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

/**
 * Create a list of possible moves from any position
 * 
 * @function GetPossibleMoves
 * 
 * @param number i Column position
 * @param number j Row position
 * @return {GameBoardPosition[]} Array of possible moves
 */
const GetPossibleMoves = (i: number, j: number, layout: GameBoardPiece[][]):GameBoardItemMoves => {

  const height = layout.length;
  const {length} = layout[0];

  const possibleMoves:GameBoardItemMoves = {};

  possibleMoves.up = layout[j === 0 ? height - 1 : j - 1][i];
  possibleMoves.down = layout[j === height - 1 ? 0 : j + 1][i];
  possibleMoves.left = layout[j][i === 0 ? length - 1 : i - 1];
  possibleMoves.right = layout[j][i === length - 1 ? 0 : i + 1];

  Object.keys(possibleMoves).map(key => {
    if (possibleMoves[key].type === GameBoardPieceType.WALL) delete possibleMoves[key];
    return true;
  });

  return possibleMoves;
};

/**
 * Convert move positions to pieces
 * 
 * @function ConvertMovesToPieces
 * 
 * @param {GameBoardPiece[][]} layout Total Board Layout
 */
const ProcessLayout = (layout: GameBoardPiece[][]): GameBoardPiece[][] => {

  const newLayout = layout;

  for (let y = 0; y < layout.length; y += 1) {
    for (let x = 0; x < layout[y].length; x += 1) {
      newLayout[y][x].moves = GetPossibleMoves(x, y, layout);
    }
  }
  
  return newLayout;
  
};

/**
 * Convert a data array to game objects
 * 
 * @function InitializeGame
 * @return {GameState} Fresh Game to play on
 */
const InitializeGame = (xAxis?: number, yAxis?: number, compassDirection?: string): GameState => {
  let layout: GameBoardPiece[][] = [];
  const items: GameBoardItem[][] = [];
  const PacmanStore: Pacman = new Pacman({id: 'DUMMY', x: !xAxis ? 0 : xAxis, y: !yAxis ? 0 : yAxis, type: GameBoardPieceType.EMPTY, moves: {}}, items);

  

  for (let y = 0; y < gameBoard.length; y += 1) {

    const layoutRow:GameBoardPiece[] = [];
    const itemsRow:GameBoardItem[] = [];

    for (let x = 0; x < gameBoard[y].length; x += 1) {
      const val = gameBoard[y][x];
      const id = `PIECE::${y}::${x}`;

      let item:GameBoardItem = { type: GameBoardItemType.EMPTY };
      const piece:GameBoardPiece = {
        id, y, x, type: GameBoardPieceType.EMPTY, moves: {}
      };

      if (PacmanStore.piece.x === x && PacmanStore.piece.y === y) {
        PacmanStore.setPiece(piece);
        item = PacmanStore;
        switch (compassDirection) {
          case 'NORTH':
            PacmanStore.compassDirection = 'NORTH';
            PacmanStore.forcedMove = 'up';
            break;
          case 'SOUTH':
            PacmanStore.compassDirection = 'SOUTH';
            PacmanStore.forcedMove = 'down';
            break;
          case 'WEST':
            PacmanStore.compassDirection = 'WEST';
            PacmanStore.forcedMove = 'right';
            break;
          case 'EAST':
            PacmanStore.compassDirection = 'EAST';
            PacmanStore.forcedMove = 'left';
            break;
          default:
            PacmanStore.compassDirection = null;
            break;
        }
      }

      switch (val) {
        case gameMap.WALL:
          piece.type = GameBoardPieceType.WALL;
          break;
        case gameMap.PACMAN:
          PacmanStore.setPiece(piece);
          item = PacmanStore;
          break;     
        default: break;
      }
      layoutRow.push(piece);
      itemsRow.push(item);
    }
    layout.push(layoutRow);
    items.push(itemsRow);
  }
  layout = ProcessLayout(layout);

  return { layout, items, PacmanStore };
};

export { InitializeGame };

export default InitializeGame;
