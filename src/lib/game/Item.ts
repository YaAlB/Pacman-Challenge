import { GameBoardItemType, GameDirection } from '../Map';

class Item implements GameBoardItem {

  type:GameBoardItemType = GameBoardItemType.EMPTY;

  piece:GameBoardPiece; 

  direction:GameDirection;

  items:GameBoardItem[][];

  backgroundItem:GameBoardItem | false;

  constructor(piece:GameBoardPiece, items:GameBoardItem[][]) {
    this.piece = piece;
    this.items = items;
    this.direction = GameDirection.NONE;
    this.backgroundItem = false;
  }

  /**
   * Sets the piece that the item is positioned on, which holds the X,Y coordinates
   * 
   * @method setPiece
   * @param {GameBoardPiece} piece Current Piece the item is to be on
   * @param {GameDirection} direction Direction the item is moving
   */
  setPiece(piece:GameBoardPiece, direction: GameDirection = GameDirection.NONE): void {
    this.piece = piece;
    this.direction = direction;
  }

  /**
   * Stores an item to be replace later
   * 
   * @param {GameBoardItem | false} item Item to store in memory 
   */
  setBackgroundItem(item: GameBoardItem | false): void {
    this.backgroundItem = item;
  }

  /**
   * Fills in an item with one in memory
   * the item is replaced
   * 
   * @method fillBackgroundItem
   */
  fillBackgroundItem(): void {
    if (this.backgroundItem !== false) {
      this.items[this.piece.y][this.piece.x] = this.backgroundItem;
    } else {
      this.items[this.piece.y][this.piece.x] = { type: GameBoardItemType.EMPTY };
    }
    this.setBackgroundItem(false);
  }

  /** 
   * Standard way in which an item moves to a new piece
   * 
   * @method move
   * @param {GameBoardPiece} piece New piece item is moving to
   * @param {GameDirection} direction Direction item is moving to
  */
  move(piece: GameBoardPiece, direction: GameDirection):void {
    this.fillBackgroundItem();
    this.setBackgroundItem(this.items[piece.y][piece.x]);

    this.setPiece(piece, direction);
    this.items[piece.y][piece.x] = this;
  }
    
}

export default Item;