/* eslint-disable @typescript-eslint/no-unused-expressions */
import { GameBoardItemType, GameDirectionMap } from '../Map';
import Item from './Item';

class Pacman extends Item implements GameBoardItem {

  type:GameBoardItemType = GameBoardItemType.PACMAN;

  desiredMove: string | false  = false;

  forcedMove: string = 'up';

  compassDirection: string | null | any = this.directionSwitch(this.forcedMove);

  constructor(piece:GameBoardPiece, items:GameBoardItem[][]) {
    super(piece, items);

    // Bind context for callback events
    this.handleKeyPress = this.handleKeyPress.bind(this);

    // Add a listener for keypresses for this object
    window.addEventListener('keypress', this.handleKeyPress, false);

  }

  /**
   * Handle direction from the keyboard
   * 
   * @method directionSwitch
   * @param {direction}
   */
  directionSwitch(direction: string) {
    if (this.forcedMove === 'up') {
      direction === 'e' ? this.forcedMove = 'right' : this.forcedMove = 'left';
    } else if (this.forcedMove === 'right') {
      direction === 'e' ? this.forcedMove = 'down' : this.forcedMove = 'up';
    } else if (this.forcedMove === 'down') {
      direction === 'e' ? this.forcedMove = 'left' : this.forcedMove = 'right';
    } else if (this.forcedMove === 'left') {
      direction === 'e' ? this.forcedMove = 'up' : this.forcedMove = 'down';
    }
    switch (this.forcedMove) {
      case 'right':
        this.compassDirection = 'EAST';
        break;
      case 'left':
        this.compassDirection = 'WEST';
        break;
      case 'up':
        this.compassDirection = 'NORTH';
        break;
      case 'down':
        this.compassDirection = 'SOUTH';
        break;
      default:
        this.compassDirection = null;
        break;
    }
  }

  /**
   * Handle a keypress from the keyboard
   * 
   * @method handleKeyPress
   * @param {KeyboardEvent} e Input event
   */
  handleKeyPress(e: KeyboardEvent): void {

    if (e.key === 'e' || e.key === 'q') {
      this.directionSwitch(e.key);
    }

    if (e.key === 'r') {
      this.desiredMove = this.forcedMove;
    }
  }
  
  /**
   * Returns the next move from the keyboard input
   * 
   * @method getNextMove
   * @return {GameBoardItemMove | boolean} Next move
   */
  getNextMove(): GameBoardItemMove | boolean {

    const { moves } = this.piece;
 
    let move: GameBoardItemMove | false = false;

    // If there is a keyboard move, use it and clear it
    if (this.desiredMove) {    
      if (moves[this.desiredMove]) {
        move = {piece: moves[this.desiredMove], direction: GameDirectionMap[this.desiredMove]};
        this.desiredMove = false;
      }
    }
    return move;
  }
}

export default Pacman;